export interface Positions {
  id: bigint
  owner: `0x${string}`
  token0: `0x${string}`
  token1: `0x${string}`
  index: number
  fee: number
  liquidity: bigint
  tickLower: number
  tickUpper: number
  tokensOwed0: bigint
  tokensOwed1: bigint
  feeGrowthInside0LastX128: bigint
  feeGrowthInside1LastX128: bigint
}
