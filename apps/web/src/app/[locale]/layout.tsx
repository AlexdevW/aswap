import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/assets/styles/globals.css"
import { Layout } from "@/components/layout"
import { Web3Provider } from "@/context/web3"
import { headers } from "next/headers"
import "@workspace/ui/globals.css"
import "@/assets/styles/globals.css"
import { ThemeProvider } from "@/components/provider"
import { Toaster } from "@workspace/ui/components/sonner"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { SITE_DESCRIPTION, SITE_NAME } from "@/config/site"
import { routing } from "@/i18n/routing"
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { UIConfigProvider } from "@workspace/ui/providers/i18n-provider"
import zh from "@workspace/ui/messages/zh.json"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  icons: "/favicon.ico",
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}>) {
  const headersList = await headers()
  const cookies = headersList.get("cookie")

  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  min-h-screen bg-background font-sans antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Web3Provider cookies={cookies}>
              <UIConfigProvider
                locale={locale}
                messages={locale === "zh" ? zh : undefined}
              >
                <Layout>{children}</Layout>
              </UIConfigProvider>
            </Web3Provider>
            <TailwindIndicator />
          </ThemeProvider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
