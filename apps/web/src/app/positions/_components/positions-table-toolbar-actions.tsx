"use client"

import type { Table } from "@tanstack/react-table"
import { CreatePositionsDialog } from "./create-positions-form-dialog"
import { QueryObserverBaseResult } from "@tanstack/react-query"
import { Positions } from "@/types/positions"

interface PoolTableToolbarActionsProps {
  table: Table<Positions>
  refetch: QueryObserverBaseResult["refetch"]
}

export function PoolTableToolbarActions({
  refetch,
}: PoolTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <CreatePositionsDialog onSuccess={() => refetch()} />
    </div>
  )
}
