"use client"
import { useWriteDebugTokenMint } from "@/lib/contracts"
import { handleTransactionError } from "@/lib/error-handlers"
import { getContractAddress } from "@/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { toast } from "@workspace/ui/components/sonner"
import { useTranslations } from "next-intl"
import { useAccount, useWatchAsset } from "wagmi"
import { useState } from "react"

export default function Faucet() {
  const t = useTranslations("Faucet")
  const tTransError = useTranslations("TransactionError")
  const account = useAccount()
  const [loading, setLoading] = useState(false)
  const { writeContractAsync } = useWriteDebugTokenMint()
  const { watchAssetAsync } = useWatchAsset()

  // 检查代币是否已添加到钱包中
  const isTokenAdded = (address: string): boolean => {
    const key = `added_token_${account.address}_${address}`
    return localStorage.getItem(key) === "true"
  }

  // 标记代币已添加到钱包
  const markTokenAsAdded = (address: string) => {
    // 使用账户地址+代币地址作为键，确保不同账户有独立记录
    const key = `added_token_${account.address}_${address}`
    localStorage.setItem(key, "true")
  }

  // 铸造成功后添加代币到钱包
  const addTokenToWallet = async (
    address: `0x${string}`,
    symbol: string,
    decimals: number = 18
  ) => {
    try {
      // 检查是否已添加过此代币
      if (isTokenAdded(address)) {
        return
      }

      // 使用wagmi的watchAsset方法添加代币
      await watchAssetAsync({
        type: "ERC20",
        options: {
          address,
          symbol,
          decimals,
        },
      })

      // 添加成功后，记录到localStorage
      markTokenAsAdded(address)
      toast.success(t("tokenAddedToWallet", { symbol }))
    } catch (error: unknown) {
      // 当用户拒绝添加代币时不显示错误提示
      handleTransactionError(error, tTransError)
    }
  }

  const claim = async (address: `0x${string}`, name: string) => {
    if (loading) {
      return
    }

    if (!account.isConnected) {
      toast.error(t("connectWallet"))
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
      toast.success(t("claimSuccess", { amount: "10", symbol: name }))

      // 铸造成功后添加代币到钱包
      await addTokenToWallet(address, name)
    } catch (error: unknown) {
      console.log("error", error)
      toast.error(handleTransactionError(error, tTransError))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col ">
      <h2 className="text-center mb-2">{t("getTestToken")}</h2>
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
          onClick={() => claim(getContractAddress("DebugTokenC"), "DTC")}
        >
          DTC
        </Button>
      </div>
    </div>
  )
}
