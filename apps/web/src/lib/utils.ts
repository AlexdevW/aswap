import { Token } from "@/types/swap"
import { encodeSqrtRatioX96 } from "@uniswap/v3-sdk"
import { TickMath } from "@uniswap/v3-sdk"
import { maxBy, minBy } from "lodash-es"
import BigNumber from "bignumber.js"
import JSBI from "jsbi"

export const shortenAddress = (address: string) => {
  if (!address) return ""
  return `${address.slice(0, 6)}...${address.slice(-6)}`
}

export const parsePriceToSqrtPriceX96 = (price: number): bigint => {
  // 使用BigNumber处理高精度小数转换
  const adjustedPrice = new BigNumber(price)
    .multipliedBy(1e18)
    .toFixed(0, BigNumber.ROUND_DOWN)
  return BigInt(encodeSqrtRatioX96(adjustedPrice, 1e18).toString())
}

export const parseSqrtPriceX96ToPrice = (sqrtPriceX96: bigint): string => {
  const Q192 = new BigNumber(2).pow(192)
  const sqrtBN = new BigNumber(sqrtPriceX96.toString())

  // 使用BigNumber进行高精度计算
  const numerator = sqrtBN.pow(2).multipliedBy(1e18)
  const priceBN = numerator.dividedBy(Q192)

  // 直接返回字符串保持完整精度
  return priceBN.dividedBy(1e18).toFormat({
    groupSeparator: "",
    decimalSeparator: ".",
  })
}

export const priceToTick = (price: number): number => {
  if (price <= 0) throw new Error("Price must be positive")
  // 使用Uniswap官方方法处理精度
  const sqrtPriceX96 = parsePriceToSqrtPriceX96(price)
  return TickMath.getTickAtSqrtRatio(JSBI.BigInt(sqrtPriceX96.toString()))
}

export const tickToPrice = (tick: number): string => {
  // 使用Uniswap官方方法获取精确sqrtPrice
  const sqrtPriceX96 = TickMath.getSqrtRatioAtTick(tick)
  // 转换为精确价格
  return parseSqrtPriceX96ToPrice(BigInt(sqrtPriceX96.toString()))
}

export const getContractAddress = (
  contract:
    | "PoolManager"
    | "PositionManager"
    | "SwapRouter"
    | "DebugTokenA"
    | "DebugTokenB"
    | "DebugTokenC"
    | "Multicall3"
): `0x${string}` => {
  const isProd = process.env.NODE_ENV === "production"
  if (contract === "PoolManager") {
    return isProd
      ? "0x5FbDB2315678afecb367f032d93F642f64180aa3"
      : "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  }
  if (contract === "PositionManager") {
    return isProd
      ? "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
      : "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  }
  if (contract === "SwapRouter") {
    return isProd
      ? "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
      : "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
  }
  if (contract === "DebugTokenA") {
    return isProd
      ? "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
      : "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
  }
  if (contract === "DebugTokenB") {
    return isProd
      ? "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
      : "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
  }
  if (contract === "DebugTokenC") {
    return isProd
      ? "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
      : "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
  }
  if (contract === "Multicall3") {
    return isProd
      ? "0xcA11bde05977b3631167028862bE2a173976CA11"
      : "0x0165878A594ca255338adfa4d48449f69242Eb8F"
  }
  throw new Error("Invalid contract")
}

// 改进后的金额转换方法（处理浮点精度）
export const parseAmountToBigInt = (amount: number, token?: Token): bigint => {
  // 处理小数精度：先四舍五入到4位小数
  const rounded = Number(amount.toFixed(4))
  // 使用字符串操作避免浮点问题
  const [intPart, decimalPart = ""] = rounded.toString().split(".")
  const paddedDecimal = decimalPart.padEnd(4, "0").slice(0, 4)
  const totalUnits = BigInt(intPart + paddedDecimal)

  return totalUnits * BigInt(10 ** ((token?.decimals || 18) - 4))
}

// 改进后的逆向转换
export const parseBigIntToAmount = (amount: bigint, token?: Token): number => {
  const divisor = BigInt(10 ** ((token?.decimals || 18) - 4))
  const totalUnits = amount / divisor
  const str = totalUnits.toString().padStart(5, "0") // 确保至少有4位小数

  const integerPart = str.slice(0, -4) || "0"
  const decimalPart = str.slice(-4).replace(/0+$/, "")

  return Number(`${integerPart}.${decimalPart.padEnd(4, "0")}`)
}

export const computeSqrtPriceLimitX96 = (
  pools: {
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
  }[],
  zeroForOne: boolean
): bigint => {
  if (zeroForOne) {
    // 如果是 token0 交换 token1，那么交易完成后价格 token0 变多，价格下降下限
    // 先找到交易池的最小 tick
    const minTick = minBy(pools, (pool) => pool.tick)?.tick ?? TickMath.MIN_TICK
    // 价格限制为最小 tick - 10000，避免价格过低，在实际项目中应该按照用户设置的滑点来调整
    const limitTick = Math.max(minTick - 10000, TickMath.MIN_TICK)
    return BigInt(TickMath.getSqrtRatioAtTick(limitTick).toString())
  } else {
    // 反之，设置一个最大的价格
    // 先找到交易池的最大 tick
    const maxTick = maxBy(pools, (pool) => pool.tick)?.tick ?? TickMath.MAX_TICK
    // 价格限制为最大 tick + 10000，避免价格过高，在实际项目中应该按照用户设置的滑点来调整
    const limitTick = Math.min(maxTick + 10000, TickMath.MAX_TICK)
    return BigInt(TickMath.getSqrtRatioAtTick(limitTick).toString())
  }
}

// 新增辅助函数处理极大数值
const safeConversion = (value: bigint) => {
  const str = value.toString()
  if (str.length <= 18) return Number(`0.${str.padStart(18, "0")}`)

  const integer = str.slice(0, -18)
  const decimal = str.slice(-18).replace(/0+$/, "")
  return decimal ? Number(`${integer}.${decimal}`) : Number(integer)
}
