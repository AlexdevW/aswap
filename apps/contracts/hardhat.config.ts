import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox-viem"
import "dotenv/config"

const SEPOLIA_URL = process.env.SEPOLIA_URL ?? ""
const PRIVATE_KEY = process.env.PRIVATE_KEY ?? ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY ?? ""

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    sepolia: {
      url: SEPOLIA_URL, // Alchemy, Infuar, QuickNote
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
}

export default config
