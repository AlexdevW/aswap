import { Locale, useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"

export default function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = use(params)
  const t = useTranslations("HomePage")

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{t("title")}</h1>
      <button className="btn btn-primary">Button</button>
    </div>
  )
}
