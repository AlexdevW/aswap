"use client"

import { DataTable } from "@workspace/ui/components/data-table"
import { useDataTable } from "@workspace/ui/hooks/use-data-table"
import { useColumns } from "./positions-table-columns"
import React from "react"
import {
  useReadPositionManagerGetAllPositions,
  useWritePositionManagerBurn,
  useWritePositionManagerCollect,
} from "@/lib/contracts"
import { getContractAddress } from "@/lib/utils"
import { DataTableToolbar } from "@workspace/ui/components/data-table/data-table-toolbar"
import { Positions } from "@/types/positions"
import { useAccount } from "wagmi"
import useDebugTokensInfo from "@/hooks/use-debug-token-info"
import { DataTableSkeleton } from "@workspace/ui/components/data-table/data-table-skeleton"

export default function PositionsTable() {
  const account = useAccount()
  const {
    data = [],
    refetch,
    isLoading,
  } = useReadPositionManagerGetAllPositions({
    address: getContractAddress("PositionManager"),
  })
  const { writeContractAsync: writePositionManagerBurn } =
    useWritePositionManagerBurn()
  const { writeContractAsync: writePositionManagerCollect } =
    useWritePositionManagerCollect()
  const { data: tokensInfo } = useDebugTokensInfo()

  const columns = useColumns({
    account,
    refetch,
    writePositionManagerBurn,
    writePositionManagerCollect,
    tokensInfo,
  })

  const { table } = useDataTable({
    data: data as Positions[],
    columns,
    pageCount: Math.ceil(data.length / 10),
    initialState: {
      columnPinning: {
        right: ["actions"],
        left: ["id"],
      },
    },
    getRowId: (originalRow) => String(originalRow.id),
  })

  if (isLoading) {
    return (
      <DataTableSkeleton
        columnCount={columns.length}
        rowCount={5}
        cellWidths={columns.map((col) => (col.size ? `${col.size}px` : "auto"))}
      />
    )
  }

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table}></DataTableToolbar>
    </DataTable>
  )
}
