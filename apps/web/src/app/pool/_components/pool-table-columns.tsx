"use client"

import type { ColumnDef } from "@tanstack/react-table"
import * as React from "react"
import { DataTableColumnHeader } from "@workspace/ui/components/data-table/data-table-column-header"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Pool } from "@/types/pool"
import { shortenAddress } from "@/lib/utils"

export function getColumns(): ColumnDef<Readonly<Pool>>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-0.5 align-top"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5 align-top"
        />
      ),
      enableSorting: false,
      enableHiding: false,
      size: 24,
    },
    {
      accessorKey: "pool",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Pool" />
      ),
      cell: ({ row }) => <div>{shortenAddress(row.original.pool)}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "token0",
      header: "Token 0",
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => <div>{shortenAddress(row.original.token0)}</div>,
    },
    {
      accessorKey: "token1",
      header: "Token 1",
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => <div>{shortenAddress(row.original.token1)}</div>,
    },
    {
      accessorKey: "index",
      header: "Index",
      enableSorting: true,
    },
    {
      accessorKey: "fee",
      header: "Fee",
      enableSorting: true,
    },
    {
      accessorKey: "tickLower",
      header: () => <div className="whitespace-nowrap">Tick Lower</div>,
      enableSorting: true,
    },
    {
      accessorKey: "tickUpper",
      header: () => <div className="whitespace-nowrap">Tick Upper</div>,
      enableSorting: true,
    },
    {
      accessorKey: "tick",
      header: "Tick",
      enableSorting: true,
    },
    {
      accessorKey: "liquidity",
      header: "Liquidity",
      enableSorting: true,
      cell: ({ row }) => row.original.liquidity.toString(),
    },
    {
      accessorKey: "sqrtPriceX96",
      header: "Price",
      enableSorting: true,
      cell: ({ row }) => row.original.sqrtPriceX96.toString(),
    },
  ]
}
