"use client"

import { DataTable } from "@workspace/ui/components/data-table"
import { useDataTable } from "@workspace/ui/hooks/use-data-table"
import { useColumns } from "./pool-table-columns"
import React from "react"
import { Pool } from "@/types/pool"
import { useReadPoolManagerGetAllPools } from "@/lib/contracts"
import { getContractAddress } from "@/lib/utils"
import { DataTableToolbar } from "@workspace/ui/components/data-table/data-table-toolbar"
import { PoolTableToolbarActions } from "./pool-table-toolbar-actions"
import useDebugTokensInfo from "@/hooks/use-debug-token-info"
import { defaultChainId } from "@/config/web3"
import { useAccount } from "wagmi"
import { DataTableSkeleton } from "@workspace/ui/components/data-table/data-table-skeleton"

export default function PoolTable() {
  const { data: tokensInfo } = useDebugTokensInfo()
  const { chainId } = useAccount()
  const {
    data = [],
    refetch,
    isLoading,
  } = useReadPoolManagerGetAllPools({
    address: getContractAddress("PoolManager"),
    chainId: chainId ?? defaultChainId,
  })
  const columns = useColumns(tokensInfo, refetch)

  const { table } = useDataTable({
    data: data as Pool[],
    columns,
    pageCount: Math.ceil(data.length / 10),
    enableColumnResizing: true,
    initialState: {
      columnPinning: { left: ["pool"], right: ["actions"] },
    },
    getRowId: (originalRow: Pool) =>
      `${originalRow.index}${originalRow.token0}${originalRow.token1}`,
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
      <DataTableToolbar table={table}>
        <PoolTableToolbarActions table={table} refetch={refetch} />
      </DataTableToolbar>
    </DataTable>
  )
}
