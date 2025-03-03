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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ASwap",
  description: "Decentralized trading markets",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const cookies = headersList.get("cookie")
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Web3Provider cookies={cookies}>
            <Layout>{children}</Layout>
          </Web3Provider>
          <TailwindIndicator />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
