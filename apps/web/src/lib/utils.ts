import { Token } from "@/types/swap"
import { encodeSqrtRatioX96 } from "@uniswap/v3-sdk"
import { TickMath } from "@uniswap/v3-sdk"
import { maxBy, minBy } from "lodash-es"
import BigNumber from "bignumber.js"
import JSBI from "jsbi"
import { IS_PROD as isProd } from "@/constants"
import { formatUnits, parseUnits } from "viem"

export const shortenAddress = (address: string) => {
  if (!address) return ""
  return `${address.slice(0, 6)}...${address.slice(-6)}`
}

export const parsePriceToSqrtPriceX96 = (price: string): bigint => {
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

export const priceToTick = (price: string): number => {
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
  if (contract === "PoolManager") {
    return isProd
      ? "0x5a898Ea4B8894f5d25364Fe593D68AE2257fCf7B"
      : "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  }
  if (contract === "PositionManager") {
    return isProd
      ? "0x87804fD6A3faeaE5e3278B78A1A29d05F9E13634"
      : "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  }
  if (contract === "SwapRouter") {
    return isProd
      ? "0x0639E856Be0DF8B3AFf6acbA7fc3fB1E6DB71E5a"
      : "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
  }
  if (contract === "DebugTokenA") {
    return isProd
      ? "0x585c3273aDCBd361ab47d579ba5BDa749C6C1f32"
      : "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
  }
  if (contract === "DebugTokenB") {
    return isProd
      ? "0x5Bb857D5C3B97d163F51103d7ee4309F39E69c90"
      : "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
  }
  if (contract === "DebugTokenC") {
    return isProd
      ? "0x3effA0A9d5403e768357aaC2B8048A0eD55a64C6"
      : "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
  }
  if (contract === "Multicall3") {
    return isProd
      ? "0xcA11bde05977b3631167028862bE2a173976CA11"
      : "0x0165878A594ca255338adfa4d48449f69242Eb8F"
  }
  throw new Error("Invalid contract")
}

// 把数字转化为大整数，
export const parseAmountToBigInt = (amount: string, token?: Token): bigint => {
  if (!/^[0-9]*[.,]?[0-9]*$/.test(amount))
    throw new Error("Invalid amount format")

  const decimals = token?.decimals || 18
  const sanitized = amount.replace(/,/g, ".").replace(/\.+/g, ".")
  const [integer, fraction = ""] = sanitized.split(".")

  // 严格遵循代币原生精度
  const validFraction = fraction.slice(0, decimals)

  try {
    return parseUnits(`${integer}.${validFraction}`, decimals)
  } catch {
    throw new Error(`Value exceeds precision limits (max ${decimals} decimals)`)
  }
}

// 把大整数转化为数字
export const parseBigIntToAmount = (amount: bigint, token?: Token): string => {
  const decimals = token?.decimals || 18
  const value = formatUnits(amount, decimals)

  // Uniswap显示规则：
  // 1. 显示所有有效小数位
  // 2. 去除末尾零
  // 3. 至少保留一个零当整数部分为0时
  return value
    .replace(/(\.\d*?[1-9])0+$/, "$1") // 去除末尾零
    .replace(/\.$/, "") // 去除纯整数的小数点
    .replace(/^0+(?=\d)/, "") // 去除前导零
    .replace(/^\./, "0.") // 处理纯小数情况
}

export function compareTokenAmounts(
  a: string,
  b: string,
  token: Token
): number {
  try {
    const aWei = parseAmountToBigInt(a, token)
    const bWei = parseAmountToBigInt(b, token)
    return aWei > bWei ? 1 : aWei < bWei ? -1 : 0
  } catch {
    return 0
  }
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
  zeroForOne: boolean,
  slippage: number = 0.5
): bigint => {
  // 将滑点百分比转换为 tick 偏移量
  // 每个 tick 代表 0.01% 的价格变化
  const slippageTicks = Math.ceil(slippage * 100)

  if (zeroForOne) {
    const minTick = minBy(pools, (pool) => pool.tick)?.tick ?? TickMath.MIN_TICK
    // 使用滑点计算价格下限
    const limitTick = Math.max(minTick - slippageTicks, TickMath.MIN_TICK)
    return BigInt(TickMath.getSqrtRatioAtTick(limitTick).toString())
  } else {
    const maxTick = maxBy(pools, (pool) => pool.tick)?.tick ?? TickMath.MAX_TICK
    // 使用滑点计算价格上限
    const limitTick = Math.min(maxTick + slippageTicks, TickMath.MAX_TICK)
    return BigInt(TickMath.getSqrtRatioAtTick(limitTick).toString())
  }
}
