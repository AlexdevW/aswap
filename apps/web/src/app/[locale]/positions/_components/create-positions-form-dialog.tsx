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
import { useTranslations } from "next-intl"
import { useModal } from "connectkit"

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

  const tConnect = useTranslations("Connect")
  const t = useTranslations("CreatePositionsDialog")
  const tTransError = useTranslations("TransactionError")

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
  const { setOpen: setConnectModalOpen } = useModal()

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
        toast.info(t(`authorizingToken${isToken0 ? "0" : "1"}`))

        await writeErc20Approve({
          address: tokenAddress,
          args: [getContractAddress("PositionManager"), amount - allowance],
        })

        toast.success(t(`token${isToken0 ? "0" : "1"}Authorized`))
      }
    } catch (error) {
      throw new Error(
        t(`tokenAuthorizationFailed`, {
          token: isToken0 ? "0" : "1",
          error: error instanceof Error ? error.message : t("unknownError"),
        })
      )
    }
  }

  const handleSubmit = async (createParams: PositionsFormType) => {
    const tokenA = createParams.tokenA as `0x${string}`
    const tokenB = createParams.tokenB as `0x${string}`
    const [token0, token1] =
      tokenA < tokenB ? [tokenA, tokenB] : [tokenB, tokenA]

    if (account?.address === undefined) {
      toast.error(t("connectWallet"))
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
      toast.info(t("creatingPosition"))

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
      toast.success(t("positionCreated"))
      onSuccess?.()
    } catch (error: unknown) {
      toast.error(handleTransactionError(error, tTransError))
    } finally {
      setTxStatus(TransactionStatus.IDLE)
    }
  }

  function onSubmit(createParams: PositionsFormType) {
    handleSubmit(createParams)
  }

  const isCreatePending = txStatus !== TransactionStatus.IDLE

  const buttonTextMap: Record<TransactionStatus, string> = {
    [TransactionStatus.IDLE]: t("submit"),
    [TransactionStatus.APPROVING_TOKEN0]: t("approvingToken0"),
    [TransactionStatus.APPROVING_TOKEN1]: t("approvingToken1"),
    [TransactionStatus.CREATING_POSITION]: t("creatingPosition"),
  }

  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={handleOpenChange}
      showTrigger={showTrigger}
      trigger={
        <Button variant="outline" size="sm">
          <PlusIcon className="size-4" aria-hidden="true" />
          {t("addNewPosition")}
        </Button>
      }
      title={t("createPosition")}
      footer={
        <>
          <DialogCloseButton>
            <Button variant="outline" disabled={isCreatePending}>
              {t("cancel")}
            </Button>
          </DialogCloseButton>
          {account?.isConnected ? (
            <Button
              aria-label={t("addNewPosition")}
              onClick={() => formRef.current?.submit()}
              disabled={isCreatePending}
            >
              {isCreatePending && (
                <Loader
                  className="mr-2 size-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              {buttonTextMap[txStatus]}
            </Button>
          ) : (
            <Button onClick={() => setConnectModalOpen(true)}>
              {tConnect("connectWallet")}
            </Button>
          )}
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
