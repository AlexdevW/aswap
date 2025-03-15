import { type ReactNode } from "react"
import { ThemeProvider } from "./theme-provider"
import { Locale, NextIntlClientProvider } from "next-intl"
import { UIConfigProvider } from "@workspace/ui/providers/i18n-provider"
import zhMessage from "@workspace/ui/messages/zh.json"
import enMessage from "@workspace/ui/messages/en.json"
import Web3Provider from "./web3-provider"

type ProvidersProps = {
  children: ReactNode
  cookie: string | null
  locale: Locale
}

const localeMessageMap = {
  zh: zhMessage,
  en: enMessage,
}

export function Providers({ children, cookie, locale }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider locale={locale}>
        <Web3Provider cookie={cookie} locale={locale}>
          <UIConfigProvider locale={locale} messages={localeMessageMap[locale]}>
            {children}
          </UIConfigProvider>
        </Web3Provider>
      </NextIntlClientProvider>
    </ThemeProvider>
  )
}
