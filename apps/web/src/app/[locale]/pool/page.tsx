import type { Pool } from "@/types/pool"
import PoolTable from "./_components/pool-table"
import { useTranslations } from "next-intl"

export default function Pool() {
  const t = useTranslations("Pool")

  return (
    <div className="container py-10 bg-white rounded-3xl w-full max-w-full">
      <div className="text-2xl font-bold">{t("title")}</div>
      <PoolTable />
    </div>
  )
}
