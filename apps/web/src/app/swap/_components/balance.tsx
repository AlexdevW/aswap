import { useReadErc20BalanceOf } from "@/lib/contracts"
import { Token } from "@/types/swap"
import { useAccount } from "wagmi"

interface Props {
  token?: Token
}

export default function Balance(props: Props) {
  const { address } = useAccount()

  const tokenAddress = props.token?.address
  const { data: balance } = useReadErc20BalanceOf({
    address: tokenAddress,
    args: [address as `0x${string}`],
    query: {
      enabled: !!tokenAddress,
      // 每 3 秒刷新一次
      refetchInterval: 3000,
    },
  })

  return balance === undefined
    ? "-"
    : // <CryptoPrice
      //   value={balance}
      //   symbol={props.token?.symbol}
      //   decimals={props.token?.decimal}
      //   fixed={2}
      // />
      Number(balance) / 10 ** 18
}
