"use client"

import { DataTable } from "@workspace/ui/components/data-table"
import { useDataTable } from "@workspace/ui/hooks/use-data-table"
import { getColumns } from "./pool-table-columns"
import React from "react"
import { Pool } from "@/types/pool"

export default function PoolTable({ data }: { data: Pool[] }) {
  const columns = React.useMemo(() => getColumns(), [])
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

  return <DataTable table={table}></DataTable>
}
