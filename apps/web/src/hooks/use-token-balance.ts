import { useAccount } from "wagmi"
import { useReadErc20BalanceOf } from "@/lib/contracts"
import { formatUnits } from "viem"
import { Token } from "@/types/swap"
import { isUndefined } from "lodash-es"

export default function useTokenBalance(token?: Token) {
  const { address } = useAccount()
  const { data: balance, refetch } = useReadErc20BalanceOf({
    address: token?.address,
    args: [address as `0x${string}`],
    query: {
      enabled: !!token?.address && !!address,
      // 每 3 秒刷新一次
      refetchInterval: 3000,
    },
  })

  return {
    balance: isUndefined(balance)
      ? balance
      : formatUnits(balance, token?.decimals || 18),
    refetch,
  }
}
