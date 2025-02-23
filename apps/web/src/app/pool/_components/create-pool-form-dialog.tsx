"use client"

import type { Row } from "@tanstack/react-table"
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
import { CreatePoolParams } from "@/types/pool"
import PoolForm, { PoolFormType } from "./pool-form"
import { getContractAddress, parsePriceToSqrtPriceX96 } from "@/lib/utils"
import { useWritePoolManagerCreateAndInitializePoolIfNecessary } from "@/lib/contracts"

interface CreatePoolDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {
  showTrigger?: boolean
  onSuccess?: () => void
}

export function CreatePoolDialog({
  // tasks,
  showTrigger = true,
  onSuccess,
  ...props
}: CreatePoolDialogProps) {
  const [isCreatePending, startCreateTransition] = React.useTransition()
  const isDesktop = useMediaQuery("(min-width: 640px)")
  const formRef = React.useRef<{ submit: () => Promise<void> }>(null)
  const { writeContractAsync } =
    useWritePoolManagerCreateAndInitializePoolIfNecessary()

  function onSubmit(createParams: PoolFormType) {
    startCreateTransition(async () => {
      // const { error } = await deleteTasks({
      //   ids: tasks.map((task) => task.id),
      // })
      // if (error) {
      //   toast.error(error)
      //   return
      // }
      await writeContractAsync({
        address: getContractAddress("PoolManager"),
        args: [
          {
            token0: createParams.token0 as `0x${string}`,
            token1: createParams.token1 as `0x${string}`,
            fee: createParams.fee,
            tickLower: createParams.tickLower,
            tickUpper: createParams.tickUpper,
            sqrtPriceX96: parsePriceToSqrtPriceX96(createParams.price),
          },
        ],
      })
      props.onOpenChange?.(false)
      toast.success("Pool added")
      onSuccess?.()
    })
  }

  if (isDesktop) {
    return (
      <Dialog {...props}>
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
            <DialogTitle>Create Pool</DialogTitle>
          </DialogHeader>
          <PoolForm ref={formRef} onSubmit={onSubmit} />
          <DialogFooter className="gap-2 sm:space-x-0">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              aria-label="Add a new pool"
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
    <Drawer {...props}>
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
          <DrawerTitle>Create Pool</DrawerTitle>
        </DrawerHeader>
        <div className="px-5">
          <PoolForm ref={formRef} onSubmit={onSubmit} />
        </div>
        <DrawerFooter className="gap-2 sm:space-x-0">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button
            aria-label="Add a new pool"
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
