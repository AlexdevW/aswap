import { getDefaultConfig } from "connectkit"
import { http, createConfig, createStorage, cookieStorage } from "wagmi"
import { hardhat, sepolia } from "wagmi/chains"
import { SITE_NAME, SITE_INFO, SITE_URL } from "@/config/site"
import { IS_PROD } from "@/constants"

export const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? ""
export const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY ?? ""

if (!WALLETCONNECT_PROJECT_ID) {
  console.warn(
    "You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable"
  )
}

export const defaultChainId = IS_PROD ? sepolia.id : hardhat.id

export function getConfig() {
  return createConfig(
    getDefaultConfig({
      // Your dApps chains
      chains: IS_PROD ? [sepolia, hardhat] : [hardhat, sepolia],
      // Required API Keys
      walletConnectProjectId: WALLETCONNECT_PROJECT_ID,
      transports: {
        [hardhat.id]: http(),
        [sepolia.id]: INFURA_KEY
          ? http("https://sepolia.infura.io/v3/" + INFURA_KEY)
          : http(),
      },
      // Required App Info
      appName: SITE_NAME,
      // Optional App Info
      appDescription: SITE_INFO,
      appUrl: SITE_URL, // your app's url
      // appIcon: SITE_EMOJI, // your app's icon, no bigger than 1024x1024px (max. 1MB)
      ssr: true,
      storage: createStorage({
        storage: cookieStorage,
      }),
    })
  )
}
