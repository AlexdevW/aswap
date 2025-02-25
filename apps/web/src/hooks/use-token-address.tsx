import { Token } from "@/types/swap"
import { useChainId } from "wagmi"

export default function useTokenAddress(
  token?: Token
): `0x${string}` | undefined {
  const chainId = useChainId()
  return token?.availableChains.find((item) => item.chain.id === chainId)
    ?.contract as `0x${string}` | undefined
}
