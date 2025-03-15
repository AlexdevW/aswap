"use client"
import { Button } from "@workspace/ui/components/button"
import { Avatar, useModal } from "connectkit"
import { useTranslations } from "next-intl"
import { useAccount } from "wagmi"

export function Connect() {
  const { setOpen } = useModal()
  const { isConnected, address } = useAccount()
  const t = useTranslations("Connect")

  return (
    <div>
      {isConnected ? (
        <div>
          <Button
            className="rounded-full transition-all active:scale-95 px-2"
            variant="secondary"
            onClick={() => setOpen(true)}
          >
            <Avatar size={20} address={address} />
            <span className="max-sm:hidden">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </Button>
        </div>
      ) : (
        <Button
          className="rounded-full transition-all active:scale-95"
          onClick={() => setOpen(true)}
        >
          {t("connectWallet")}
        </Button>
      )}
    </div>
  )
}
