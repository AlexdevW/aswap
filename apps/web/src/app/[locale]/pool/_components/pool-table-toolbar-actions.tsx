"use client"

import type { Table } from "@tanstack/react-table"
import { CreatePoolDialog } from "./create-pool-form-dialog"
import { Pool } from "@/types/pool"
import { QueryObserverBaseResult } from "@tanstack/react-query"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { useTranslations } from "next-intl"

interface PoolTableToolbarActionsProps {
  table: Table<Pool>
  refetch: QueryObserverBaseResult["refetch"]
}

export function PoolTableToolbarActions({
  refetch,
}: PoolTableToolbarActionsProps) {
  const t = useTranslations("PoolTableToolbarActions")

  return (
    <div className="flex items-center gap-2">
      <Link href="/positions">
        <Button size="sm">{t("positions")}</Button>
      </Link>
      <CreatePoolDialog onSuccess={() => refetch()} />
    </div>
  )
}
