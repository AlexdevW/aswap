import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/assets/styles/globals.css"
import { Layout } from "@/components/layout"
import { headers } from "next/headers"
import "@workspace/ui/globals.css"
import "@/assets/styles/globals.css"
import { Toaster } from "@workspace/ui/components/sonner"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { SITE_DESCRIPTION, SITE_NAME } from "@/config/site"
import { routing } from "@/i18n/routing"
import { hasLocale, Locale } from "next-intl"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { Providers } from "@/components/providers"
import { Analytics } from "@vercel/analytics/react"

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
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const cookie = (await headers()).get("cookie")
  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans antialiased`}
      >
        <Providers cookie={cookie} locale={locale}>
          <Layout>{children}</Layout>
          <TailwindIndicator />
          <Toaster />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
