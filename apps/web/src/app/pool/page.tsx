import type { Pool } from "@/types/pool"
import PoolTable from "./_components/pool-table"

async function getData(): Promise<Pool[]> {
  // Return mock data for testing
  return [
    {
      pool: "0x1234567890abcdef1234567890abcdef12345678",
      token0: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
      token1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
      index: 0,
      fee: 3000, // 0.3%
      tickLower: -887272,
      tickUpper: 887272,
      tick: 198000,
      liquidity: BigInt("1000000000000000000"),
      sqrtPriceX96: BigInt("1500000000000000000000"),
    },
    {
      pool: "0xabcdef1234567890abcdef1234567890abcdef12",
      token0: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // WBTC
      token1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
      index: 1,
      fee: 500, // 0.05%
      tickLower: -887272,
      tickUpper: 887272,
      tick: 200000,
      liquidity: BigInt("2000000000000000000"),
      sqrtPriceX96: BigInt("1600000000000000000000"),
    },
  ]
}

export default async function Pool() {
  const data = await getData()
  return (
    <div className="container mx-auto py-20">
      <PoolTable data={data} />
    </div>
  )
}
