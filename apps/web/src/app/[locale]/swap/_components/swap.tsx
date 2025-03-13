"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react"
import SwapCard from "./swap-card"
import { Button } from "@workspace/ui/components/button"
import { ArrowDown, Loader } from "lucide-react"
import { Token } from "@/types/swap"
import {
  swapRouterAbi,
  useReadIPoolManagerGetAllPools,
  useReadPoolManagerGetPairs,
  useWriteErc20Approve,
  useWriteSwapRouterExactInput,
  useWriteSwapRouterExactOutput,
} from "@/lib/contracts"
import {
  computeSqrtPriceLimitX96,
  getContractAddress,
  parseAmountToBigInt,
  parseBigIntToAmount,
} from "@/lib/utils"
import { uniq } from "lodash-es"
import { useAccount, usePublicClient } from "wagmi"
import { toast } from "@workspace/ui/components/sonner"
import useTokenBalance from "@/hooks/use-token-balance"
import useTokensInfo from "@/hooks/use-debug-token-info"
import { useDebouncedCallback } from "@workspace/ui/hooks/use-debounced-callback"
import Settings from "./settings"

export default function Swap() {
  const account = useAccount()
  const [isCreatePending, startCreateTransition] = useTransition()
  // 新增计算状态
  const [isCalculating, setIsCalculating] = useState(false)
  // 用户可以选择的代币
  const [tokens, setTokens] = useState<Token[]>([])
  // 用户选择的两个代币
  const [tokenA, setTokenA] = useState<Token>()
  const [tokenB, setTokenB] = useState<Token>()
  // 两个代币的地址
  const tokenAddressA = tokenA?.address
  const tokenAddressB = tokenB?.address

  // 按照地址大小排序
  const [token0, token1] =
    tokenAddressA && tokenAddressB && tokenAddressA < tokenAddressB
      ? [tokenAddressA, tokenAddressB]
      : [tokenAddressB, tokenAddressA]
  // 是否是 token0 来交换 token1
  const zeroForOne = token0 === tokenAddressA

  // 是否是指定输入（否则就是指定输出）
  const [isExactInput, setIsExactInput] = useState(true)

  // 两个代币的数量
  const [amountA, setAmountA] = useState<string>()
  const [amountB, setAmountB] = useState<string>()

  const [deadline, setDeadline] = useState(30)
  const [slippage, setSlippage] = useState<number | undefined>(0.5)

  // 获取所有的交易对
  const { data: pairs } = useReadPoolManagerGetPairs({
    address: getContractAddress("PoolManager"),
  })

  const { data: tokensInfo } = useTokensInfo()

  const { balance: tokenABalance, refetch: refetchTokenABalance } =
    useTokenBalance(tokensInfo?.[tokenAddressA ?? ""])
  const { balance: tokenBBalance, refetch: refetchTokenBBalance } =
    useTokenBalance(tokensInfo?.[tokenAddressB ?? ""])

  useEffect(() => {
    if (tokensInfo !== undefined) {
      const options: Token[] = uniq(
        pairs?.map((pair) => [pair.token0, pair.token1]).flat()
      ).map((token) => tokensInfo[token]!)
      setTokens(options)
    }
  }, [pairs, tokensInfo])

  // 获取所有的交易池
  const { data: pools, refetch: refetchPools } = useReadIPoolManagerGetAllPools(
    {
      address: getContractAddress("PoolManager"),
      blockTag: "latest",
      query: {
        refetchInterval: 10_000, // 每10秒轮询（按需调整间隔）
        refetchOnWindowFocus: true, // 窗口聚焦时更新
        refetchOnReconnect: true, // 网络恢复时更新
        retry: 2,
        retryDelay: 1000,
      },
    }
  )

  // 计算交易池的交易顺序
  const swapPools = useMemo(() => {
    return (
      pools?.filter((pool) => {
        return (
          pool.token0 === token0 && pool.token1 === token1 && pool.liquidity > 0
        )
      }) || []
    )
  }, [pools, token0, token1])

  const swapIndexPath: number[] = useMemo(() => {
    return (
      swapPools
        ?.sort((a, b) => {
          // 简单处理，按照价格排序，再按照手续费排序，优先在价格低的池子中交易（按照 tick 判断），如果价格一样，就在手续费低的池子里面交易
          if (a.tick !== b.tick) {
            if (zeroForOne) {
              // token0 交换 token1 时，tick 越大意味着 token0 价格越高，所以要把 tick 大的放前面
              return b.tick > a.tick ? 1 : -1
            }
            return a.tick > b.tick ? 1 : -1
          }
          return a.fee - b.fee
        })
        .map((pool) => pool.index) || []
    )
  }, [swapPools, zeroForOne])

  // 计算本次交易的价格限制
  const sqrtPriceLimitX96 = computeSqrtPriceLimitX96(
    swapPools,
    zeroForOne,
    slippage
  )
  const publicClient = usePublicClient()

  const [insufficientLiquidityDirection, setInsufficientLiquidityDirection] =
    useState<"in" | "out" | null>(null)

  const updateAmountBWithAmountA = useCallback(
    async (value: string) => {
      const amountIn = parseAmountToBigInt(value, tokenA)
      if (
        !publicClient ||
        !tokenAddressA ||
        !tokenAddressB ||
        amountIn === 0n ||
        amountIn > parseAmountToBigInt(tokenABalance ?? "0", tokenA)
      ) {
        return
      }

      try {
        setIsCalculating(true) // 开始计算时设置状态
        setInsufficientLiquidityDirection(null)
        const newAmountB = await publicClient.simulateContract({
          address: getContractAddress("SwapRouter"),
          abi: swapRouterAbi,
          functionName: "quoteExactInput",
          args: [
            {
              tokenIn: tokenAddressA,
              tokenOut: tokenAddressB,
              indexPath: swapIndexPath,
              amountIn,
              sqrtPriceLimitX96,
            },
          ],
        })
        setAmountB(parseBigIntToAmount(newAmountB.result, tokenB))
        setIsExactInput(true)
        if (newAmountB.result === 0n) {
          setInsufficientLiquidityDirection("out")
          setAmountB(undefined)
        }
      } catch (e: unknown) {
        console.log(12312, "123")
        setInsufficientLiquidityDirection("out")
        if (e instanceof Error) {
          toast.error(e.message)
        }
      } finally {
        setIsCalculating(false) // 无论成功失败都清除状态
      }
    },
    [
      publicClient,
      tokenAddressA,
      tokenAddressB,
      tokenABalance,
      tokenA,
      tokenB,
      swapIndexPath,
      sqrtPriceLimitX96,
    ]
  )

  const updateAmountAWithAmountB = useCallback(
    async (value: string) => {
      const amountOut = parseAmountToBigInt(value, tokenB)
      if (
        !publicClient ||
        !tokenAddressA ||
        !tokenAddressB ||
        amountOut === 0n
      ) {
        return
      }

      try {
        setIsCalculating(true) // 开始计算时设置状态
        setInsufficientLiquidityDirection(null)
        const newAmountA = await publicClient.simulateContract({
          address: getContractAddress("SwapRouter"),
          abi: swapRouterAbi,
          functionName: "quoteExactOutput",
          args: [
            {
              tokenIn: tokenAddressA,
              tokenOut: tokenAddressB,
              indexPath: swapIndexPath,
              amountOut,
              sqrtPriceLimitX96,
            },
          ],
        })
        setAmountA(parseBigIntToAmount(newAmountA.result, tokenA))
        setIsExactInput(false)

        if (newAmountA.result === 0n) {
          setInsufficientLiquidityDirection("in")
          setAmountA(undefined)
        }
      } catch (e: unknown) {
        setInsufficientLiquidityDirection("in")
        if (e instanceof Error) {
          toast.error(e.message)
        }
      } finally {
        setIsCalculating(false) // 无论成功失败都清除状态
      }
    },
    [
      publicClient,
      tokenAddressA,
      tokenAddressB,
      tokenA,
      tokenB,
      swapIndexPath,
      sqrtPriceLimitX96,
    ]
  )

  const handleAmountAChange = (value?: string) => {
    setAmountA(value)
    setIsExactInput(true)
  }

  const handleAmountBChange = (value?: string) => {
    setAmountB(value)
    setIsExactInput(false)
  }

  const handleSwitch = () => {
    setTokenA(tokenB)
    setTokenB(tokenA)
    setAmountA(amountB)
    setAmountB(amountA)
  }

  const debouncedUpdateAmountBWithAmountA = useDebouncedCallback(
    updateAmountBWithAmountA,
    300
  )
  const debouncedUpdateAmountAWithAmountB = useDebouncedCallback(
    updateAmountAWithAmountB,
    300
  )

  useEffect(() => {
    // 当用户输入发生变化时，重新请求报价接口计算价格
    if (isExactInput && amountA) {
      debouncedUpdateAmountBWithAmountA(amountA)
    }
  }, [
    isExactInput,
    tokenAddressA,
    tokenAddressB,
    amountA,
    debouncedUpdateAmountBWithAmountA,
  ])

  useEffect(() => {
    // 当用户输入发生变化时，重新请求报价接口计算价格
    if (!isExactInput && amountB) {
      debouncedUpdateAmountAWithAmountB(amountB)
    }
  }, [
    isExactInput,
    tokenAddressB,
    tokenAddressA,
    amountB,
    debouncedUpdateAmountAWithAmountB,
  ])

  const { writeContractAsync: writeExactInput } = useWriteSwapRouterExactInput()
  const { writeContractAsync: writeExactOutput } =
    useWriteSwapRouterExactOutput()
  const { writeContractAsync: writeApprove } = useWriteErc20Approve()

  const handleTransaction = () => {
    startCreateTransition(async () => {
      try {
        if (isExactInput) {
          const swapParams = {
            tokenIn: tokenAddressA!,
            tokenOut: tokenAddressB!,
            amountIn: parseAmountToBigInt(amountA!, tokenA),
            amountOutMinimum: parseAmountToBigInt(amountB!, tokenB),
            recipient: account?.address as `0x${string}`,
            deadline: BigInt(Math.floor(Date.now() / 1000) + deadline * 60),
            sqrtPriceLimitX96,
            indexPath: swapIndexPath,
          }

          await writeApprove({
            address: tokenAddressA!,
            args: [getContractAddress("SwapRouter"), swapParams.amountIn],
          })
          await writeExactInput({
            address: getContractAddress("SwapRouter"),
            args: [swapParams],
          })
        } else {
          const swapParams = {
            tokenIn: tokenAddressA!,
            tokenOut: tokenAddressB!,
            amountOut: parseAmountToBigInt(amountB!, tokenB),
            amountInMaximum: parseAmountToBigInt(amountA!, tokenA),
            recipient: account?.address as `0x${string}`,
            deadline: BigInt(Math.floor(Date.now() / 1000) + deadline * 60),
            sqrtPriceLimitX96,
            indexPath: swapIndexPath,
          }

          await writeApprove({
            address: tokenAddressA!,
            args: [
              getContractAddress("SwapRouter"),
              swapParams.amountInMaximum,
            ],
          })
          await writeExactOutput({
            address: getContractAddress("SwapRouter"),
            args: [swapParams],
          })
        }
        toast.success("交易成功")
        setAmountA("")
        setAmountB("")
        refetchTokenABalance()
        refetchTokenBBalance()
        refetchPools()
      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message)
        }
      }
    })
  }

  const sellOptions = React.useMemo(
    () => tokens.filter((t) => t !== tokenB),
    [tokens, tokenB]
  )

  const buyOptions = React.useMemo(
    () => tokens.filter((t) => t !== tokenA),
    [tokens, tokenA]
  )

  function getButtonText() {
    if (!tokenAddressA || !tokenAddressB) return "选择代币"
    if (insufficientLiquidityDirection) {
      return insufficientLiquidityDirection === "in"
        ? `${tokenA?.symbol} 流动性不足`
        : `${tokenB?.symbol} 流动性不足`
    }
    if (!amountA || !amountB) return "输入金额"
    if (swapPools.length === 0) return "当前交易对无流动性"
    if (isCalculating) return "确认最终报价..."
    if (
      parseAmountToBigInt(amountA!, tokenA) >
      parseAmountToBigInt(tokenABalance ?? "0", tokenA)
    ) {
      return `${tokenA?.symbol} 不足`
    }

    return "交易"
  }

  return (
    <div>
      <div className="max-w-[480px] mx-auto my-8 flex flex-col justify-center items-center gap-1 bg-white p-2 rounded-3xl">
        <Settings
          onDeadlineChange={(minutes) => setDeadline(minutes)}
          onSlippageChange={(slippage) => setSlippage(slippage)}
        />
        <SwapCard
          title="出售"
          options={sellOptions}
          onAmountChange={handleAmountAChange}
          onTokenChange={(token) => {
            setTokenA(token)
            if (token?.address !== tokenA?.address) setAmountA("")
          }}
          token={tokenA}
          amount={amountA}
          balance={tokenABalance}
          sellModel
        />
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute shadow-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 bg-secondary rounded-full border-white border-8 hover:bg-background transition-all active:scale-95"
            onClick={handleSwitch}
          >
            <ArrowDown size={20} className="!size-5" />
          </Button>
        </div>
        <SwapCard
          title="购买"
          options={buyOptions}
          onAmountChange={handleAmountBChange}
          onTokenChange={(token) => {
            setTokenB(token)
            if (token?.address !== tokenB?.address) setAmountB("")
          }}
          token={tokenB}
          amount={amountB}
          balance={tokenBBalance}
        />
        <Button
          className="w-full mt-1 rounded-xl"
          onClick={handleTransaction}
          disabled={
            !tokenAddressA ||
            !tokenAddressB ||
            !amountA ||
            !amountB ||
            !tokenABalance ||
            swapPools.length === 0 ||
            parseAmountToBigInt(amountA!, tokenA) >
              parseAmountToBigInt(tokenABalance, tokenA) ||
            isCreatePending ||
            isCalculating
          }
        >
          {(isCreatePending || isCalculating) && (
            <Loader className="mr-2 size-4 animate-spin" aria-hidden="true" />
          )}
          {getButtonText()}
        </Button>
      </div>
    </div>
  )
}
