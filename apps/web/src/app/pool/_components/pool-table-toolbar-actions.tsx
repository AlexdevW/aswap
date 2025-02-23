"use client"

import type { Table } from "@tanstack/react-table"
import { CreatePoolDialog } from "./create-pool-form-dialog"
import { Pool } from "@/types/pool"

interface PoolTableToolbarActionsProps {
  table: Table<Pool>
  refetch: () => Promise<void>
}

export function PoolTableToolbarActions({
  refetch,
}: PoolTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <CreatePoolDialog onSuccess={() => refetch()} />
    </div>
  )
}
