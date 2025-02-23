"use client"

import { DataTable } from "@workspace/ui/components/data-table"
import { useDataTable } from "@workspace/ui/hooks/use-data-table"
import { getColumns } from "./pool-table-columns"
import React from "react"
import { Pool } from "@/types/pool"
import { useReadPoolManagerGetAllPools } from "@/lib/contracts"
import { getContractAddress } from "@/lib/utils"
import { DataTableToolbar } from "@workspace/ui/components/data-table/data-table-toolbar"
import { PoolTableToolbarActions } from "./pool-table-toolbar-actions"

export default function PoolTable() {
  const columns = React.useMemo(() => getColumns(), [])
  const { data = [], refetch } = useReadPoolManagerGetAllPools({
    address: getContractAddress("PoolManager"),
  })
  console.log(data, "data")

  const { table } = useDataTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / 10),
    enableColumnResizing: true,
    // filterFields,
    // enableAdvancedFilter: enableAdvancedTable,
    initialState: {
      //   sorting: [{ id: "amount", desc: true }],
      columnPinning: { right: ["sqrtPriceX96"], left: ["select", "pool"] },
    },
    getRowId: (originalRow: Pool) =>
      `${originalRow.index}${originalRow.token0}${originalRow.token1}`,
    // shallow: false,
    // clearOnDefault: true,
  })

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table}>
        <PoolTableToolbarActions table={table} refetch={refetch} />
      </DataTableToolbar>
    </DataTable>
  )
}
