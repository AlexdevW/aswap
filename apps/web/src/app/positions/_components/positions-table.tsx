"use client"

import { DataTable } from "@workspace/ui/components/data-table"
import { useDataTable } from "@workspace/ui/hooks/use-data-table"
import { getColumns } from "./positions-table-columns"
import React from "react"
import { useReadPositionManagerGetAllPositions } from "@/lib/contracts"
import { getContractAddress } from "@/lib/utils"
import { DataTableToolbar } from "@workspace/ui/components/data-table/data-table-toolbar"
import { PoolTableToolbarActions } from "./positions-table-toolbar-actions"
import { Positions } from "@/types/positions"

export default function PositionsTable() {
  const columns = React.useMemo(() => getColumns(), [])
  const { data = [], refetch } = useReadPositionManagerGetAllPositions({
    address: getContractAddress("PositionManager"),
  })

  const { table } = useDataTable({
    data: data as Positions[],
    columns,
    pageCount: Math.ceil(data.length / 10),
    initialState: {
      columnPinning: { right: ["sqrtPriceX96"], left: ["select", "pool"] },
    },
    getRowId: (originalRow) =>
      `${originalRow.index}${originalRow.token0}${originalRow.token1}`,
  })

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table}>
        <PoolTableToolbarActions table={table} refetch={refetch} />
      </DataTableToolbar>
    </DataTable>
  )
}
