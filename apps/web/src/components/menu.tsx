"use client"
import React, { useState } from "react"
import LinkComponent from "./link-component"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"
import { Menu } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Swap",
    href: "/swap",
  },
  {
    label: "Pool",
    href: "/pool",
  },
]

export function MenuMobile({ className }: { className?: string }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className={cn("flex items-center", className)}>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="bg-transparent active:bg-transparent px-4 size-5 active:scale-95 transition-all duration-200"
          >
            <Menu className="!size-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="px-5 min-h-96 bg-white rounded-t-3xl">
          <DrawerTitle className="text-md font-bold my-2">菜单</DrawerTitle>
          {menuItems.map((item) => (
            <LinkComponent
              href={item.href}
              onClick={() => setOpen(false)}
              key={item.href}
              className={cn(
                "text-lg active:text-secondary-foreground transition-colors rounded-3xl px-3 py-2",
                pathname === item.href
                  ? "text-secondary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </LinkComponent>
          ))}
          <div className="text-md font-bold my-2">设置</div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export function MenuDesktop({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <div className={cn("flex items-center gap-8", className)}>
      {menuItems.slice(1).map((item) => (
        <LinkComponent key={item.href} href={item.href}>
          <div
            className={cn(
              "text-xl hover:text-secondary-foreground transition-colors",
              pathname === item.href
                ? "text-secondary-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </div>
        </LinkComponent>
      ))}
    </div>
  )
}
