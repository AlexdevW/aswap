import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/assets/styles/globals.css"
import { Layout } from "@/components/Layout"
import { Web3Provider } from "@/context/Web3"
import { headers } from "next/headers"
import { NuqsAdapter } from "@workspace/ui/components/data-table"
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/Provider"

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <Web3Provider cookies={cookies}>
              <Layout>{children}</Layout>
            </Web3Provider>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  )
}
