import { getDefaultConfig } from "connectkit"
import { http, createConfig, createStorage, cookieStorage } from "wagmi"
import { hardhat, mainnet, sepolia } from "wagmi/chains"
import { SITE_NAME, SITE_INFO, SITE_URL } from "@/config/site"

export const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? ""
if (!WALLETCONNECT_PROJECT_ID) {
  console.warn(
    "You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable"
  )
}

export function getConfig() {
  return createConfig(
    getDefaultConfig({
      // Your dApps chains
      chains: [mainnet, hardhat, sepolia],
      // Required API Keys
      walletConnectProjectId: WALLETCONNECT_PROJECT_ID,
      transports: {
        [mainnet.id]: http(),
        [hardhat.id]: http(),
        [sepolia.id]: http(),
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
