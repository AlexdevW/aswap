import { useAccount } from "wagmi"
import { useReadErc20BalanceOf } from "@/lib/contracts"
import { formatEther } from "viem"
import BigNumber from "bignumber.js"

export default function useTokenBalance(
  tokenAddress?: `0x${string}`,
  decimals: number = 8
) {
  const { address } = useAccount()
  const { data: balance, refetch } = useReadErc20BalanceOf({
    address: tokenAddress,
    args: [address as `0x${string}`],
    query: {
      enabled: !!tokenAddress,
      // 每 3 秒刷新一次
      refetchInterval: 3000,
    },
  })

  return {
    balance:
      balance === undefined
        ? balance
        : new BigNumber(formatEther(balance))
            .decimalPlaces(decimals, BigNumber.ROUND_FLOOR)
            .toNumber(),
    refetch,
  }
}
