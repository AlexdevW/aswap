import { Chain } from "viem"

export type Token = {
  name: string
  symbol: string
  icon: React.ReactNode
  decimal: number
  availableChains: {
    chain: Chain
    contract?: string
  }[]
}
