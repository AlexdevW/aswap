"use client"
import { Loader, PlusIcon } from "lucide-react"
import * as React from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"
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

interface CreatePositionsDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {
  showTrigger?: boolean
  onSuccess?: () => void
}

export function CreatePositionsDialog({
  showTrigger = true,
  onSuccess,
  ...props
}: CreatePositionsDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [isCreatePending, startCreateTransition] = React.useTransition()
  const isDesktop = useMediaQuery("(min-width: 640px)")
  const formRef = React.useRef<{ submit: () => Promise<void> }>(null)
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
    amount: bigint
  ) => {
    const allowance = await getErc20Allowance(
      tokenAddress,
      account?.address as `0x${string}`,
      getContractAddress("PositionManager")
    )

    if (allowance < amount) {
      await writeErc20Approve({
        address: tokenAddress,
        args: [getContractAddress("PositionManager"), amount - allowance],
      })
    }
  }

  function onSubmit(createParams: PositionsFormType) {
    const token0 = createParams.token0 as `0x${string}`
    const token1 = createParams.token1 as `0x${string}`
    const amount0Desired = BigInt(createParams.amount0Desired)
    const amount1Desired = BigInt(createParams.amount1Desired)
    startCreateTransition(async () => {
      if (account?.address === undefined) {
        toast.error("Please connect wallet first")
        return
      }
      try {
        // 检查两个代币的授权
        await checkAndApprove(token0, amount0Desired)
        await checkAndApprove(token1, amount1Desired)

        await writeContractAsync({
          address: getContractAddress("PositionManager"),
          args: [
            {
              token0,
              token1,
              index: createParams.index,
              amount0Desired: amount0Desired,
              amount1Desired: amount1Desired,
              recipient: account?.address as `0x${string}`,
              deadline: BigInt(Date.now() + 100000),
            },
          ],
        })
        setOpen(false)
        props.onOpenChange?.(false)
        toast.success("Create Position Successful")
        onSuccess?.()
      } catch (error: unknown) {
        console.log(error, "error")
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error("An unknown error occurred")
        }
      }
    })
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen} {...props}>
        {showTrigger ? (
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <PlusIcon className="size-4" aria-hidden="true" />
              New
            </Button>
          </DialogTrigger>
        ) : null}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Positions</DialogTitle>
          </DialogHeader>
          <PositionsForm ref={formRef} onSubmit={onSubmit} />
          <DialogFooter className="gap-2 sm:space-x-0">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              aria-label="Add a new Positions"
              onClick={() => formRef.current?.submit()}
              disabled={isCreatePending}
            >
              {isCreatePending && (
                <Loader
                  className="mr-2 size-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} {...props}>
      {showTrigger ? (
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm">
            <PlusIcon className="size-4" aria-hidden="true" />
            New
          </Button>
        </DrawerTrigger>
      ) : null}
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create Positions</DrawerTitle>
        </DrawerHeader>
        <div className="px-5">
          <PositionsForm ref={formRef} onSubmit={onSubmit} />
        </div>
        <DrawerFooter className="gap-2 sm:space-x-0">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button
            aria-label="Add a new Positions"
            onClick={() => formRef.current?.submit()}
            disabled={isCreatePending}
          >
            {isCreatePending && (
              <Loader className="mr-2 size-4 animate-spin" aria-hidden="true" />
            )}
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
