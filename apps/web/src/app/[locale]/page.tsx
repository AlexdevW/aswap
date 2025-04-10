import { Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Footer from "@/components/footer"

export default function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = use(params)

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
