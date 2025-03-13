"use client"

import { DataTable } from "@workspace/ui/components/data-table"
import { useDataTable } from "@workspace/ui/hooks/use-data-table"
import { getColumns } from "./positions-table-columns"
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

export default function PositionsTable() {
  const account = useAccount()
  const { data = [], refetch } = useReadPositionManagerGetAllPositions({
    address: getContractAddress("PositionManager"),
  })
  const { writeContractAsync: writePositionManagerBurn } =
    useWritePositionManagerBurn()
  const { writeContractAsync: writePositionManagerCollect } =
    useWritePositionManagerCollect()
  const { data: tokensInfo } = useDebugTokensInfo()

  const columns = React.useMemo(
    () =>
      getColumns({
        account,
        refetch,
        writePositionManagerBurn,
        writePositionManagerCollect,
        tokensInfo,
      }),
    [
      account,
      refetch,
      writePositionManagerBurn,
      writePositionManagerCollect,
      tokensInfo,
    ]
  )

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

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table}></DataTableToolbar>
    </DataTable>
  )
}
