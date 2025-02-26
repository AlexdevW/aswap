"use client"
import { useWriteDebugTokenMint } from "@/lib/contracts"
import { getContractAddress } from "@/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { toast } from "@workspace/ui/components/sonner"
import React from "react"
import { useAccount } from "wagmi"

export default function Faucet() {
  const account = useAccount()
  const [loading, setLoading] = React.useState(false)
  const { writeContractAsync } = useWriteDebugTokenMint()

  const claim = async (address: `0x${string}`, name: string) => {
    if (loading) {
      return
    }
    try {
      setLoading(true)
      await writeContractAsync({
        address,
        // default to 10 TestToken
        args: [
          account?.address as `0x${string}`,
          BigInt("10000000000000000000"),
        ],
      })
      toast.success(`Claim 10 ${name} success`)
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col ">
      <h2 className="text-center mb-2">领取测试代币</h2>
      <div className="flex items-center justify-center space-x-4 text-sm">
        <Button
          variant="outline"
          size="sm"
          className="bg-white border-none rounded-full active:scale-95"
          onClick={() => claim(getContractAddress("DebugTokenA"), "DTA")}
        >
          DTA
        </Button>
        <Separator orientation="vertical" />
        <Button
          variant="outline"
          size="sm"
          className="bg-white border-none rounded-full active:scale-95"
          onClick={() => claim(getContractAddress("DebugTokenB"), "DTB")}
        >
          DTB
        </Button>
        <Separator orientation="vertical" />
        <Button
          variant="outline"
          size="sm"
          className="bg-white border-none rounded-full active:scale-95"
          onClick={() => claim(getContractAddress("DebugTokenB"), "DTB")}
        >
          DTC
        </Button>
      </div>
    </div>
  )
}
