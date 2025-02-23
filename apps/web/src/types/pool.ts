export interface Pool {
  pool: `0x${string}`
  token0: `0x${string}`
  token1: `0x${string}`
  index: number
  fee: number
  feeProtocol: number
  tickLower: number
  tickUpper: number
  tick: number
  sqrtPriceX96: bigint
  liquidity: bigint
}

export interface CreatePoolParams {
  token0: `0x${string}`
  token1: `0x${string}`
  fee: number
  tickLower: number
  tickUpper: number
  price: number
}
