import React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@workspace/ui/components/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose,
} from "@workspace/ui/components/drawer"
import { cn } from "@workspace/ui/lib/utils"

interface ResponsiveDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  showTrigger?: boolean
  className?: string
  contentClassName?: string
}

export function ResponsiveDialog({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  showTrigger = true,
  contentClassName,
}: ResponsiveDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(open || false)
  const isDesktop = useMediaQuery("(min-width: 640px)")

  // 支持受控和非受控模式
  const isOpen = open !== undefined ? open : internalOpen
  const handleOpenChange = (value: boolean) => {
    setInternalOpen(value)
    onOpenChange?.(value)
  }

  /** Generic function that prevents any default event behavior. */
  const avoidDefaultDomBehavior = (e: Event) => {
    e.preventDefault()
  }

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        {showTrigger && trigger ? (
          <DialogTrigger asChild>{trigger}</DialogTrigger>
        ) : null}
        <DialogContent
          className={cn("bg-white !rounded-3xl", contentClassName)}
          onPointerDownOutside={avoidDefaultDomBehavior}
          onInteractOutside={avoidDefaultDomBehavior}
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description}
          </DialogHeader>
          {children}
          {footer && (
            <DialogFooter className="gap-2 sm:space-x-0">{footer}</DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={isOpen} onOpenChange={handleOpenChange}>
      {showTrigger && trigger ? (
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      ) : null}
      <DrawerContent
        className={cn("bg-white !rounded-3xl", contentClassName)}
        onPointerDownOutside={avoidDefaultDomBehavior}
        onInteractOutside={avoidDefaultDomBehavior}
      >
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description}
        </DrawerHeader>
        <div className="px-5">{children}</div>
        {footer && (
          <DrawerFooter className="gap-2 sm:space-x-0">{footer}</DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}

export function DialogCloseButton({
  children,
  ...props
}: React.ComponentProps<typeof DialogClose>) {
  const isDesktop = useMediaQuery("(min-width: 640px)")

  if (isDesktop) {
    return (
      <DialogClose asChild {...props}>
        {children}
      </DialogClose>
    )
  }

  return (
    <DrawerClose asChild {...props}>
      {children}
    </DrawerClose>
  )
}
