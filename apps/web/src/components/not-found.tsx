import { useTranslations } from "next-intl"

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage")

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-secondary-foreground mt-60">
        {t("title")}
      </h1>
      <p className="text-lg text-secondary-foreground">{t("description")}</p>
    </div>
  )
}
