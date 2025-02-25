"use client"

import React, { useCallback, useEffect, useState, useTransition } from "react"
import SwapCard from "./swap-card"
import { Button } from "@workspace/ui/components/button"
import { ArrowDown, Loader } from "lucide-react"
import { Token } from "@/types/swap"
import useTokenAddress from "@/hooks/use-token-address"
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
  getTokenInfo,
  parseAmountToBigInt,
  parseBigIntToAmount,
} from "@/lib/utils"
import { uniq } from "lodash-es"
import { useAccount, usePublicClient } from "wagmi"
import { toast } from "@workspace/ui/components/sonner"

export default function Swap() {
  const account = useAccount()
  const [isCreatePending, startCreateTransition] = useTransition()
  // 用户可以选择的代币
  const [tokens, setTokens] = useState<Token[]>([])
  // 用户选择的两个代币
  const [tokenA, setTokenA] = useState<Token>()
  const [tokenB, setTokenB] = useState<Token>()
  // 两个代币的地址
  const tokenAddressA = useTokenAddress(tokenA)
  const tokenAddressB = useTokenAddress(tokenB)

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
  const [amountA, setAmountA] = useState<number | undefined>()
  const [amountB, setAmountB] = useState<number | undefined>()

  // 获取所有的交易对
  const { data: pairs } = useReadPoolManagerGetPairs({
    address: getContractAddress("PoolManager"),
  })

  useEffect(() => {
    const options: Token[] = uniq(
      pairs?.map((pair) => [pair.token0, pair.token1]).flat()
    ).map(getTokenInfo)
    setTokens(options)
    setTokenA(options[0])
    setTokenB(options[1])
  }, [pairs])

  // 获取所有的交易池
  const { data: pools = [] } = useReadIPoolManagerGetAllPools({
    address: getContractAddress("PoolManager"),
  })

  // 计算交易池的交易顺序
  const swapPools = pools.filter((pool) => {
    return (
      pool.token0 === token0 && pool.token1 === token1 && pool.liquidity > 0
    )
  })
  const swapIndexPath: number[] = swapPools
    .sort((a, b) => {
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
    .map((pool) => pool.index)

  // 计算本次交易的价格限制
  const sqrtPriceLimitX96 = computeSqrtPriceLimitX96(swapPools, zeroForOne)

  const publicClient = usePublicClient()

  const updateAmountBWithAmountA = useCallback(
    async (value: number) => {
      if (
        !publicClient ||
        !tokenAddressA ||
        !tokenAddressB ||
        isNaN(value) ||
        value === 0
      ) {
        return
      }
      if (tokenAddressA === tokenAddressB) {
        toast.error("Please select different tokens")
        return
      }

      try {
        const newAmountB = await publicClient.simulateContract({
          address: getContractAddress("SwapRouter"),
          abi: swapRouterAbi,
          functionName: "quoteExactInput",
          args: [
            {
              tokenIn: tokenAddressA,
              tokenOut: tokenAddressB,
              indexPath: swapIndexPath,
              amountIn: parseAmountToBigInt(value, tokenA),
              sqrtPriceLimitX96,
            },
          ],
        })
        setAmountB(parseBigIntToAmount(newAmountB.result, tokenB))
        setIsExactInput(true)
      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message)
        }
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

  const updateAmountAWithAmountB = useCallback(
    async (value: number) => {
      if (!publicClient || !tokenAddressA || !tokenAddressB || isNaN(value)) {
        return
      }
      try {
        const newAmountA = await publicClient.simulateContract({
          address: getContractAddress("SwapRouter"),
          abi: swapRouterAbi,
          functionName: "quoteExactOutput",
          args: [
            {
              tokenIn: tokenAddressA,
              tokenOut: tokenAddressB,
              indexPath: swapIndexPath,
              amountOut: parseAmountToBigInt(value, tokenB),
              sqrtPriceLimitX96,
            },
          ],
        })
        setAmountA(parseBigIntToAmount(newAmountA.result, tokenA))
        setIsExactInput(false)
      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message)
        }
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
    setAmountA(value === "" ? undefined : Number(value))
    setIsExactInput(true)
  }

  const handleAmountBChange = (value?: string) => {
    setAmountB(value === "" ? undefined : Number(value))
    setIsExactInput(false)
  }

  const handleSwitch = () => {
    setTokenA(tokenB)
    setTokenB(tokenA)
    setAmountA(amountB)
    setAmountB(amountA)
  }

  useEffect(() => {
    // 当用户输入发生变化时，重新请求报价接口计算价格
    if (isExactInput) {
      updateAmountBWithAmountA(amountA || 0)
    } else {
      updateAmountAWithAmountB(amountB || 0)
    }
  }, [
    isExactInput,
    tokenAddressA,
    tokenAddressB,
    amountA,
    amountB,
    updateAmountBWithAmountA,
    updateAmountAWithAmountB,
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
            deadline: BigInt(Math.floor(Date.now() / 1000) + 1000),
            sqrtPriceLimitX96,
            indexPath: swapIndexPath,
          }
          console.log("swapParams", swapParams)
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
            amountInMaximum: parseAmountToBigInt(Math.ceil(amountA!), tokenA),
            recipient: account?.address as `0x${string}`,
            deadline: BigInt(Math.floor(Date.now() / 1000) + 1000),
            sqrtPriceLimitX96,
            indexPath: swapIndexPath,
          }
          console.log("swapParams", swapParams)
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
      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message)
        }
      }
    })
  }

  return (
    <div>
      <div className="w-[350px] mx-auto my-8 flex flex-col justify-center items-center gap-0.5">
        <SwapCard
          title="出售"
          options={tokens}
          onAmountChange={handleAmountAChange}
          onTokenChange={setTokenA}
          token={tokenA}
          amount={amountA}
        />
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            onClick={handleSwitch}
          >
            <ArrowDown />
          </Button>
        </div>
        <SwapCard
          title="购买"
          options={tokens}
          onAmountChange={handleAmountBChange}
          onTokenChange={setTokenB}
          token={tokenB}
          amount={amountB}
        />
        <Button
          className="w-full mt-2"
          onClick={handleTransaction}
          disabled={
            !tokenAddressA ||
            !tokenAddressB ||
            !amountA ||
            !amountB ||
            isCreatePending
          }
        >
          {isCreatePending && (
            <Loader className="mr-2 size-4 animate-spin" aria-hidden="true" />
          )}
          交易
        </Button>
      </div>
    </div>
  )
}
