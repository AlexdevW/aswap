"use client"
import { Loader, PlusIcon } from "lucide-react"
import * as React from "react"
import { useTranslations } from "next-intl"
import { useAccount } from "wagmi"

import { Button } from "@workspace/ui/components/button"
import { toast } from "@workspace/ui/components/sonner"
import {
  DialogCloseButton,
  ResponsiveDialog,
} from "@/components/responsive-dialog"
import PoolForm, { PoolFormType } from "./pool-form"
import {
  getContractAddress,
  parsePriceToSqrtPriceX96,
  priceToTick,
} from "@/lib/utils"
import { useWritePoolManagerCreateAndInitializePoolIfNecessary } from "@/lib/contracts"
import { Dialog } from "@workspace/ui/components/dialog"
import { handleTransactionError } from "@/lib/error-handlers"
import { useModal } from "connectkit"

interface CreatePoolDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {
  onSuccess?: () => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

enum TransactionStatus {
  IDLE = "idle",
  CREATING_POOL = "creating_pool",
}

export function CreatePoolDialog({
  onSuccess,
  open: controlledOpen,
  onOpenChange,
  ...props
}: CreatePoolDialogProps) {
  const t = useTranslations("CreatePoolDialog")
  const tTransError = useTranslations("TransactionError")
  const tConnect = useTranslations("Connect")
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)
  const [txStatus, setTxStatus] = React.useState<TransactionStatus>(
    TransactionStatus.IDLE
  )
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
  const { isConnected } = useAccount()
  const { setOpen: setConnectModalOpen } = useModal()

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      setUncontrolledOpen(nextOpen)
      onOpenChange?.(nextOpen)
      setTxStatus(TransactionStatus.IDLE)
    },
    [onOpenChange]
  )

  const formRef = React.useRef<{ submit: () => Promise<void> }>(null)
  const { writeContractAsync } =
    useWritePoolManagerCreateAndInitializePoolIfNecessary()

  // 处理提交逻辑
  const handleSubmit = React.useCallback(
    async (createParams: PoolFormType) => {
      setTxStatus(TransactionStatus.CREATING_POOL)
      const [token0, token1] =
        createParams.tokenA > createParams.tokenB
          ? [createParams.tokenB, createParams.tokenA]
          : [createParams.tokenA, createParams.tokenB]

      try {
        await writeContractAsync({
          address: getContractAddress("PoolManager"),
          args: [
            {
              token0: token0 as `0x${string}`,
              token1: token1 as `0x${string}`,
              fee: createParams.fee,
              tickLower: priceToTick(createParams.priceLower),
              tickUpper: priceToTick(createParams.priceUpper),
              sqrtPriceX96: parsePriceToSqrtPriceX96(createParams.price),
            },
          ],
        })
        handleOpenChange(false)
        toast.success(t("successMessage"))
        onSuccess?.()
      } catch (error: unknown) {
        toast.error(handleTransactionError(error, tTransError))
      } finally {
        setTxStatus(TransactionStatus.IDLE)
      }
    },
    [writeContractAsync, handleOpenChange, onSuccess, t, tTransError]
  )

  const isCreatePending = txStatus !== TransactionStatus.IDLE

  const buttonTextMap: Record<TransactionStatus, string> = {
    [TransactionStatus.IDLE]: t("submit"),
    [TransactionStatus.CREATING_POOL]: t("creatingPool"),
  }

  // 处理钱包连接
  const handleConnectWallet = () => {
    setConnectModalOpen(true)
  }

  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={handleOpenChange}
      trigger={
        <Button variant="outline" size="sm">
          <PlusIcon className="size-4" aria-hidden="true" />
          {t("new")}
        </Button>
      }
      title={t("createPool")}
      contentClassName="bg-white"
      footer={
        <>
          <DialogCloseButton>
            <Button disabled={isCreatePending} variant="outline">
              {t("cancel")}
            </Button>
          </DialogCloseButton>
          {isConnected ? (
            <Button
              aria-label={t("addNewPool")}
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
            <Button onClick={handleConnectWallet}>
              {tConnect("connectWallet")}
            </Button>
          )}
        </>
      }
      {...props}
    >
      <PoolForm ref={formRef} onSubmit={handleSubmit} />
    </ResponsiveDialog>
  )
}
