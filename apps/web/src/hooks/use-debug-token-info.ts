import { erc20Abi } from "@/lib/contracts"
import { getContractAddress } from "@/lib/utils"
import { Token } from "@/types/swap"
import { useQuery } from "@tanstack/react-query"
import { multicall } from "viem/actions"
import { usePublicClient } from "wagmi"

export default function useDebugTokensInfo() {
  const publicClient = usePublicClient()

  return useQuery({
    queryKey: ["tokens-info"],
    queryFn: async () => {
      if (!publicClient) throw new Error("Public client not found")

      const tokens = ["DebugTokenA", "DebugTokenB", "DebugTokenC"] as const
      const contracts = tokens.map((token) => ({
        address: getContractAddress(token),
        abi: erc20Abi,
      }))

      const multicallAddress = getContractAddress("Multicall3")

      const [names, symbols, decimals] = await Promise.all([
        multicall(publicClient, {
          contracts: contracts.map((c) => ({
            ...c,
            functionName: "name",
          })),
          multicallAddress,
        }),
        multicall(publicClient, {
          contracts: contracts.map((c) => ({
            ...c,
            functionName: "symbol",
          })),
          multicallAddress,
        }),
        multicall(publicClient, {
          contracts: contracts.map((c) => ({
            ...c,
            functionName: "decimals",
          })),
          multicallAddress,
        }),
      ])

      return contracts.reduce(
        (acc, { address }, index) => {
          acc[address] = {
            name: names[index]?.result as string,
            symbol: symbols[index]?.result as string,
            decimals: decimals[index]?.result as number,
            icon: "",
            address,
          }
          return acc
        },
        {} as Record<string, Token>
      )
    },
    enabled: !!publicClient,
    gcTime: 1000 * 60 * 30, // 替换 cacheTime
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true, // 窗口聚焦时更新
    refetchOnReconnect: true, // 网络恢复时更新
    refetchInterval: 10_000, // 每10秒轮询（按需调整间隔）
  })
}
