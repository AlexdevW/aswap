export interface Pool {
  pool: string
  token0: string
  token1: string
  index: number
  fee: number
  tickLower: number
  tickUpper: number
  tick: number
  liquidity: bigint
  sqrtPriceX96: bigint
}
