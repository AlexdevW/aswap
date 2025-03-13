"use client"

import { createAppKit } from "@reown/appkit/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi"
import { WALLETCONNECT_ADAPTER, WALLETCONNECT_PROJECT_ID } from "@/lib/web3"
import { SITE_NAME, SITE_INFO, SITE_URL } from "@/config/site"
import { ETH_CHAINS } from "@/lib/network"
import { mainnet } from "@reown/appkit/networks"

interface Props extends PropsWithChildren {
  cookies: string | null
}

const queryClient = new QueryClient()

const metadata = {
  name: SITE_NAME,
  description: SITE_INFO,
  url: SITE_URL,
  icons: ["https://avatars.githubusercontent.com/u/49752996"],
}

createAppKit({
  adapters: [WALLETCONNECT_ADAPTER],
  projectId: WALLETCONNECT_PROJECT_ID,
  networks: [mainnet, ...ETH_CHAINS],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: false, // Optional - defaults to your Cloud configuration
    email: false,
    onramp: false,
    swaps: false,
    send: false,
    socials: false,
  },
  themeMode: "light",
})

export function Web3Provider(props: Props) {
  const initialState = cookieToInitialState(
    WALLETCONNECT_ADAPTER.wagmiConfig as Config,
    props.cookies
  )

  return (
    <>
      <WagmiProvider
        config={WALLETCONNECT_ADAPTER.wagmiConfig as Config}
        initialState={initialState}
      >
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}
