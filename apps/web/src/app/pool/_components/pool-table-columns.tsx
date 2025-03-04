"use client"

import type { ColumnDef } from "@tanstack/react-table"
import * as React from "react"
import { DataTableColumnHeader } from "@workspace/ui/components/data-table/data-table-column-header"
import { Pool } from "@/types/pool"
import { parseSqrtPriceX96ToPrice, tickToPrice } from "@/lib/utils"
import { Token } from "@/types/swap"
import BigNumber from "bignumber.js"
import { CreatePositionsDialog } from "@/app/positions/_components/create-positions-form-dialog"

// 改进格式化价格的辅助函数
const formatPrice = (priceStr: string): string => {
  // 使用 BigNumber 处理，避免精度丢失
  const bn = new BigNumber(priceStr)

  // 如果是整数，直接返回原始字符串
  if (bn.isInteger()) {
    return priceStr
  }

  // 获取小数部分
  const decimalPart = bn.minus(bn.integerValue()).toString().substring(2)

  // 如果小数部分长度小于等于8，保持原样
  if (decimalPart.length <= 8) {
    return priceStr
  }

  // 否则保留8位小数并去除末尾的0
  return bn.toFixed(8).replace(/\.?0+$/, "")
}

export function getColumns(
  tokensInfo: Record<string, Token> = {},
  refetch: () => void
): ColumnDef<Readonly<Pool>>[] {
  return [
    {
      accessorKey: "pool",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Pool" />
      ),
      cell: ({ row }) => {
        const token0Symbol =
          tokensInfo[row.original.token0]?.symbol || "Unknown"
        const token1Symbol =
          tokensInfo[row.original.token1]?.symbol || "Unknown"
        return (
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span>{`${token0Symbol}/${token1Symbol}`}</span>
            </div>
          </div>
        )
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "sqrtPriceX96",
      header: "Price",
      enableSorting: true,
      cell: ({ row }) => parseSqrtPriceX96ToPrice(row.original.sqrtPriceX96),
    },
    // {
    //   accessorKey: "index",
    //   header: "Index",
    //   enableSorting: true,
    // },
    {
      accessorKey: "fee",
      header: "Fee",
      enableSorting: true,
      cell: ({ row }) => `${row.original.fee / 10000}%`,
    },
    {
      accessorKey: "tickLower",
      header: () => <div className="whitespace-nowrap">Tick Lower</div>,
      enableSorting: true,
      cell: ({ row }) => (
        <div>
          <p>{row.original.tickLower}</p>
          <p className="text-xs text-gray-500">
            <span className="whitespace-nowrap">
              (Price ≈ {formatPrice(tickToPrice(row.original.tickLower))})
            </span>
          </p>
        </div>
      ),
    },
    {
      accessorKey: "tickUpper",
      header: () => <div className="whitespace-nowrap">Tick Upper</div>,
      enableSorting: true,
      cell: ({ row }) => (
        <div>
          <p>{row.original.tickUpper}</p>
          <p className="text-xs text-gray-500">
            <span className="whitespace-nowrap">
              (Price ≈ {formatPrice(tickToPrice(row.original.tickUpper))})
            </span>
          </p>
        </div>
      ),
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
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div>
          <CreatePositionsDialog
            defaultValues={{
              tokenA: row.original.token0,
              tokenB: row.original.token1,
              index: row.original.index,
              amount0Desired: "1",
              amount1Desired: "1",
            }}
            onSuccess={refetch}
          />
        </div>
      ),
    },
  ]
}
