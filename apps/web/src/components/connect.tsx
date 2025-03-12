"use client"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { Button } from "@workspace/ui/components/button"
import React from "react"

export function Connect() {
  const { address, isConnected } = useAppKitAccount()
  const { open } = useAppKit()

  return (
    <div>
      {isConnected ? (
        <div>
          <Button
            className="rounded-full transition-all active:scale-95 px-2"
            variant="secondary"
            onClick={() => open()}
          >
            <wui-avatar className="shadow-sm" size="sm" address={address} />
            <span className="max-sm:hidden">
              {address?.slice(0, 4)}...{address?.slice(-6)}
            </span>
          </Button>
        </div>
      ) : (
        <Button
          className="rounded-full transition-all active:scale-95"
          onClick={() => open()}
        >
          Connect
        </Button>
      )}
    </div>
  )
}
