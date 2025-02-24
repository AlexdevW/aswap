"use client"

import type { ColumnDef } from "@tanstack/react-table"
import * as React from "react"
import { shortenAddress } from "@/lib/utils"
import { Positions } from "@/types/positions"

export function getColumns(): ColumnDef<Positions>[] {
  return [
    {
      accessorKey: "id",
      header: "ID",
      enableSorting: false,
    },
    {
      accessorKey: "owner",
      header: "Owner",
      enableSorting: false,
    },
    {
      accessorKey: "token0",
      header: () => <div className="whitespace-nowrap">Token 0</div>,
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => <div>{shortenAddress(row.original.token0)}</div>,
    },
    {
      accessorKey: "token1",
      header: () => <div className="whitespace-nowrap">Token 1</div>,
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => <div>{shortenAddress(row.original.token1)}</div>,
    },
    {
      accessorKey: "index",
      header: "Index",
    },
    {
      accessorKey: "fee",
      header: "Fee",
    },
    {
      accessorKey: "liquidity",
      header: "Liquidity",
      cell: ({ row }) => row.original.liquidity.toString(),
    },
    {
      accessorKey: "tickLower",
      header: () => <div className="whitespace-nowrap">Tick Lower</div>,
    },
    {
      accessorKey: "tickUpper",
      header: () => <div className="whitespace-nowrap">Tick Upper</div>,
    },
    {
      accessorKey: "tokensOwed0",
      cell: ({ row }) => row.original.tokensOwed0.toString(),
      header: () => <div className="whitespace-nowrap">Tokens Owed 0</div>,
    },
    {
      accessorKey: "tokensOwed1",
      cell: ({ row }) => row.original.tokensOwed1.toString(),
      header: () => <div className="whitespace-nowrap">Tokens Owed 1</div>,
    },
    {
      accessorKey: "feeGrowthInside0LastX128",
      cell: ({ row }) => row.original.feeGrowthInside0LastX128.toString(),
      header: () => (
        <div className="whitespace-nowrap">Fee Growth Inside 0</div>
      ),
    },
    {
      accessorKey: "feeGrowthInside1LastX128",
      cell: ({ row }) => row.original.feeGrowthInside1LastX128.toString(),
      header: () => (
        <div className="whitespace-nowrap">Fee Growth Inside 1</div>
      ),
    },
  ]
}
