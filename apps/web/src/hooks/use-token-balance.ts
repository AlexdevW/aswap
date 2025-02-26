import { Token } from "@/types/swap"
import { useAccount } from "wagmi"
import useTokenAddress from "./use-token-address"
import { useReadErc20BalanceOf } from "@/lib/contracts"

export default function useTokenBalance(token?: Token) {
  const { address } = useAccount()
  const tokenAddress = useTokenAddress(token)
  const { data: balance } = useReadErc20BalanceOf({
    address: tokenAddress,
    args: [address as `0x${string}`],
    query: {
      enabled: !!tokenAddress,
      // 每 3 秒刷新一次
      refetchInterval: 3000,
    },
  })

  return balance === undefined ? balance : Number(balance) / 10 ** 18
}
