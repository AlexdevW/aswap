"use client"

import { DataTable } from "@workspace/ui/components/data-table"
import { useDataTable } from "@workspace/ui/hooks/use-data-table"
import { columns } from "../columns"

export default function PoolTable({ data }: { data: any }) {
  const { table } = useDataTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / 10),
    // filterFields,
    // enableAdvancedFilter: enableAdvancedTable,
    // initialState: {
    //   sorting: [{ id: "amount", desc: true }],
    //   columnPinning: { right: ["actions"] },
    // },
    getRowId: (originalRow: any) => originalRow.id,
    // shallow: false,
    // clearOnDefault: true,
  })

  return <DataTable table={table}></DataTable>
}
