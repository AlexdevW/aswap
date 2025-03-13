"use client"
import { Loader, PlusIcon } from "lucide-react"
import * as React from "react"
import { Button } from "@workspace/ui/components/button"
import { toast } from "@workspace/ui/components/sonner"
import PositionsForm, { PositionsFormType } from "./positions-form"
import { getContractAddress } from "@/lib/utils"
import {
  debugTokenAbi,
  useWriteErc20Approve,
  useWritePositionManagerMint,
} from "@/lib/contracts"
import { useAccount, usePublicClient } from "wagmi"
import { parseEther } from "viem"
import {
  ResponsiveDialog,
  DialogCloseButton,
} from "@/components/responsive-dialog"
import { Dialog } from "@workspace/ui/components/dialog"
import { handleTransactionError } from "@/lib/error-handlers"

// 建议：这些类型可以移到单独的类型文件中
interface CreatePositionsDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {
  showTrigger?: boolean
  onSuccess?: () => void
  defaultValues?: PositionsFormType
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

// 交易状态的枚举类型
enum TransactionStatus {
  IDLE = "idle",
  APPROVING_TOKEN0 = "approving_token0",
  APPROVING_TOKEN1 = "approving_token1",
  CREATING_POSITION = "creating_position",
}

// 使用 map 来替代 switch 语句
const buttonTextMap: Record<TransactionStatus, string> = {
  [TransactionStatus.IDLE]: "提交",
  [TransactionStatus.APPROVING_TOKEN0]: "正在授权第一个代币...",
  [TransactionStatus.APPROVING_TOKEN1]: "正在授权第二个代币...",
  [TransactionStatus.CREATING_POSITION]: "正在创建头寸...",
}

export function CreatePositionsDialog({
  showTrigger = true,
  onSuccess,
  defaultValues,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  ...props
}: CreatePositionsDialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)
  const [txStatus, setTxStatus] = React.useState<TransactionStatus>(
    TransactionStatus.IDLE
  )
  const formRef = React.useRef<{ submit: () => Promise<void> }>(null)

  // 判断是否为受控模式
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen

  const handleOpenChange = React.useCallback(
    (value: boolean) => {
      setUncontrolledOpen(value)
      controlledOnOpenChange?.(value)
      setTxStatus(TransactionStatus.IDLE)
    },
    [controlledOnOpenChange]
  )

  const { writeContractAsync } = useWritePositionManagerMint()
  const { writeContractAsync: writeErc20Approve } = useWriteErc20Approve()
  const account = useAccount()
  const publicClient = usePublicClient()

  const getErc20Allowance = async (
    tokenAddress: `0x${string}`,
    ownerAddress: `0x${string}`,
    spenderAddress: `0x${string}`
  ): Promise<bigint> => {
    try {
      const data = await publicClient?.readContract({
        address: tokenAddress,
        abi: debugTokenAbi,
        functionName: "allowance",
        args: [ownerAddress, spenderAddress],
      })

      return data ? BigInt(data.toString()) : BigInt(0)
    } catch (error) {
      console.error("Error fetching allowance:", error)
      return BigInt(0)
    }
  }

  const checkAndApprove = async (
    tokenAddress: `0x${string}`,
    amount: bigint,
    isToken0: boolean
  ) => {
    try {
      setTxStatus(
        isToken0
          ? TransactionStatus.APPROVING_TOKEN0
          : TransactionStatus.APPROVING_TOKEN1
      )

      const allowance = await getErc20Allowance(
        tokenAddress,
        account?.address as `0x${string}`,
        getContractAddress("PositionManager")
      )

      if (allowance < amount) {
        // 添加用户反馈
        toast.info(`正在授权${isToken0 ? "第一" : "第二"}个代币...`)

        await writeErc20Approve({
          address: tokenAddress,
          args: [getContractAddress("PositionManager"), amount - allowance],
        })

        toast.success(`${isToken0 ? "第一" : "第二"}个代币授权成功`)
      }
    } catch (error) {
      // console.error(`Error approving ${isToken0 ? "token0" : "token1"}:`, error)
      throw new Error(
        `授权${isToken0 ? "第一" : "第二"}个代币失败: ${error instanceof Error ? error.message : "未知错误"}`
      )
    }
  }

  const handleSubmit = async (createParams: PositionsFormType) => {
    // 使用 useMemo 可以缓存这个结果，这里为了简化直接计算
    const tokenA = createParams.tokenA as `0x${string}`
    const tokenB = createParams.tokenB as `0x${string}`
    const [token0, token1] =
      tokenA < tokenB ? [tokenA, tokenB] : [tokenB, tokenA]

    if (account?.address === undefined) {
      toast.error("请先连接钱包")
      return
    }

    setTxStatus(TransactionStatus.IDLE)

    try {
      const amount0Desired = parseEther(createParams.amount0Desired)
      const amount1Desired = parseEther(createParams.amount1Desired)

      // 检查两个代币的授权
      await checkAndApprove(token0, amount0Desired, true)
      await checkAndApprove(token1, amount1Desired, false)

      // 创建头寸
      setTxStatus(TransactionStatus.CREATING_POSITION)
      toast.info("正在创建头寸...")

      await writeContractAsync({
        address: getContractAddress("PositionManager"),
        args: [
          {
            token0,
            token1,
            index: createParams?.index,
            amount0Desired,
            amount1Desired,
            recipient: account?.address as `0x${string}`,
            deadline: BigInt(Date.now() + 100000),
          },
        ],
      })

      handleOpenChange(false)
      toast.success("创建头寸成功")
      onSuccess?.()
    } catch (error: unknown) {
      toast.error(handleTransactionError(error))
    } finally {
      setTxStatus(TransactionStatus.IDLE)
    }
  }

  function onSubmit(createParams: PositionsFormType) {
    handleSubmit(createParams)
  }

  const isCreatePending = txStatus !== TransactionStatus.IDLE

  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={handleOpenChange}
      showTrigger={showTrigger}
      trigger={
        <Button variant="outline" size="sm">
          <PlusIcon className="size-4" aria-hidden="true" />
          添加头寸
        </Button>
      }
      title="创建头寸"
      footer={
        <>
          <DialogCloseButton>
            <Button variant="outline" disabled={isCreatePending}>
              取消
            </Button>
          </DialogCloseButton>
          <Button
            aria-label="添加新头寸"
            onClick={() => formRef.current?.submit()}
            disabled={isCreatePending}
          >
            {isCreatePending && (
              <Loader className="mr-2 size-4 animate-spin" aria-hidden="true" />
            )}
            {buttonTextMap[txStatus]}
          </Button>
        </>
      }
      {...props}
    >
      <PositionsForm
        ref={formRef}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      />
    </ResponsiveDialog>
  )
}
