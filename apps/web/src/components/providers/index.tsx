import { type ReactNode } from "react"
import { ThemeProvider } from "./theme-provider"
import { Locale, NextIntlClientProvider } from "next-intl"
import { UIConfigProvider } from "@workspace/ui/components/i18n-provider"
import zhMessage from "@workspace/ui/locales/zh.json"
import enMessage from "@workspace/ui/locales/en.json"
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
    <NextIntlClientProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Web3Provider cookie={cookie} locale={locale}>
          <UIConfigProvider locale={localeMessageMap[locale]}>
            {children}
          </UIConfigProvider>
        </Web3Provider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
