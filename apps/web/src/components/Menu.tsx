"use client"
import React from "react"
import LinkComponent from "./LinkComponent"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"
export default function Menu() {
  const pathname = usePathname()

  return (
    <div className="flex">
      <LinkComponent href="/swap">
        <div
          className={cn(
            "text-xl hover:text-secondary-foreground transition-colors",
            pathname === "/swap"
              ? "text-secondary-foreground"
              : "text-muted-foreground"
          )}
        >
          swap
        </div>
      </LinkComponent>

      <LinkComponent href="/pool" className="ml-5">
        <div
          className={cn(
            "text-xl hover:text-secondary-foreground transition-colors",
            pathname === "/pool"
              ? "text-secondary-foreground"
              : "text-muted-foreground"
          )}
        >
          pool
        </div>
      </LinkComponent>
    </div>
  )
}
