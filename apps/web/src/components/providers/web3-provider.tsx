"use client"
import { getConfig } from "@/config/web3"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ConnectKitProvider } from "connectkit"
import { cookieToInitialState, WagmiProvider } from "wagmi"
import { ReactNode } from "react"
import { Locale } from "next-intl"

const config = getConfig()
const queryClient = new QueryClient()

const localeMap = {
  zh: "zh-CN",
  en: "en-US",
} as const

export default function Web3Provider({
  cookie,
  locale,
  children,
}: {
  cookie: string | null
  children: ReactNode
  locale: Locale
}) {
  const initialState = cookieToInitialState(config, cookie)
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider options={{ language: localeMap[locale] }}>
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
