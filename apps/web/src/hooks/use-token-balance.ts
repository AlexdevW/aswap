import { useAccount } from "wagmi"
import { useReadErc20BalanceOf } from "@/lib/contracts"

export default function useTokenBalance(tokenAddress?: `0x${string}`) {
  const { address } = useAccount()
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
