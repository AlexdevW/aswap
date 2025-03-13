"use client"

import type { ColumnDef } from "@tanstack/react-table"
import * as React from "react"
import { getContractAddress, shortenAddress } from "@/lib/utils"
import { Positions } from "@/types/positions"
import { Config, UseAccountReturnType } from "wagmi"
import { QueryObserverBaseResult } from "@tanstack/react-query"
import { toast } from "@workspace/ui/components/sonner"
import {
  useWritePositionManagerCollect,
  useWritePositionManagerBurn,
} from "@/lib/contracts"
import { Button } from "@workspace/ui/components/button"
import { DataTableColumnHeader } from "@workspace/ui/components/data-table/data-table-column-header"
import { Token } from "@/types/swap"
import { useTranslations } from "next-intl"

type WriteCollectType = ReturnType<
  typeof useWritePositionManagerCollect
>["writeContractAsync"]

type WriteBurnType = ReturnType<
  typeof useWritePositionManagerBurn
>["writeContractAsync"]

type GetColumnsType = {
  account: UseAccountReturnType<Config>
  refetch: QueryObserverBaseResult["refetch"]
  writePositionManagerBurn: WriteBurnType
  writePositionManagerCollect: WriteCollectType
  tokensInfo?: Record<string, Token>
}

export function useColumns({
  account,
  refetch,
  writePositionManagerBurn,
  writePositionManagerCollect,
  tokensInfo = {},
}: GetColumnsType): ColumnDef<Positions>[] {
  const t = useTranslations("PositionsTableColumns")

  const columns = React.useMemo<ColumnDef<Positions>[]>(
    () => [
      {
        accessorKey: "id",
        header: t("id"),
        enableSorting: false,
      },
      {
        accessorKey: "owner",
        header: t("owner"),
        enableSorting: false,
        cell: ({ row }) => <div>{shortenAddress(row.original.owner)}</div>,
      },
      // {
      //   accessorKey: "token0",
      //   header: () => <div className="whitespace-nowrap">Token 0</div>,
      //   enableSorting: false,
      //   enableHiding: false,
      //   cell: ({ row }) => <div>{shortenAddress(row.original.token0)}</div>,
      // },
      // {
      //   accessorKey: "token1",
      //   header: () => <div className="whitespace-nowrap">Token 1</div>,
      //   enableSorting: false,
      //   enableHiding: false,
      //   cell: ({ row }) => <div>{shortenAddress(row.original.token1)}</div>,
      // },
      {
        accessorKey: "pool",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={t("pool")} />
        ),
        cell: ({ row }) => {
          const token0Symbol =
            tokensInfo[row.original.token0]?.symbol || "Unknown"
          const token1Symbol =
            tokensInfo[row.original.token1]?.symbol || "Unknown"
          // const version = `v${row.original.version || '3'}`
          // const fee = `${(row.original.fee / 10000).toFixed(2)}%`

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
        accessorKey: "fee",
        header: t("fee"),
        enableSorting: true,
        cell: ({ row }) => `${row.original.fee / 10000}%`,
      },
      {
        accessorKey: "index",
        header: t("index"),
      },
      {
        accessorKey: "liquidity",
        header: t("liquidity"),
        cell: ({ row }) => row.original.liquidity.toString(),
      },
      {
        accessorKey: "tickLower",
        header: () => <div className="whitespace-nowrap">{t("tickLower")}</div>,
      },
      {
        accessorKey: "tickUpper",
        header: () => <div className="whitespace-nowrap">{t("tickUpper")}</div>,
      },
      {
        accessorKey: "tokensOwed0",
        cell: ({ row }) => row.original.tokensOwed0.toString(),
        header: () => (
          <div className="whitespace-nowrap">{t("tokensOwed0")}</div>
        ),
      },
      {
        accessorKey: "tokensOwed1",
        cell: ({ row }) => row.original.tokensOwed1.toString(),
        header: () => (
          <div className="whitespace-nowrap">{t("tokensOwed1")}</div>
        ),
      },
      {
        accessorKey: "feeGrowthInside0LastX128",
        cell: ({ row }) => row.original.feeGrowthInside0LastX128.toString(),
        header: () => (
          <div className="whitespace-nowrap">{t("feeGrowthInside0")}</div>
        ),
      },
      {
        accessorKey: "feeGrowthInside1LastX128",
        cell: ({ row }) => row.original.feeGrowthInside1LastX128.toString(),
        header: () => (
          <div className="whitespace-nowrap">{t("feeGrowthInside1")}</div>
        ),
      },
      {
        accessorKey: "actions",
        header: t("actions"),
        cell: ({ row }) => {
          if (row.original.owner !== account?.address) {
            return "-"
          }

          return (
            <div>
              {row.original.liquidity > 0 && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={async () => {
                    try {
                      await writePositionManagerBurn({
                        address: getContractAddress("PositionManager"),
                        args: [row.original.id],
                      })
                      refetch()
                    } catch (error: unknown) {
                      if (error instanceof Error) {
                        toast.error(t("error", { error: error.message }))
                      }
                    }
                  }}
                >
                  {t("remove")}
                </Button>
              )}
              {(row.original.tokensOwed0 > 0 ||
                row.original.tokensOwed1 > 0) && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={async () => {
                    try {
                      await writePositionManagerCollect({
                        address: getContractAddress("PositionManager"),
                        args: [
                          row.original.id,
                          account?.address as `0x${string}`,
                        ],
                      })
                      refetch()
                    } catch (error: unknown) {
                      if (error instanceof Error) {
                        toast.error(t("error", { error: error.message }))
                      }
                    }
                  }}
                >
                  {t("collect")}
                </Button>
              )}
            </div>
          )
        },
      },
    ],
    [
      account,
      refetch,
      writePositionManagerBurn,
      writePositionManagerCollect,
      tokensInfo,
      t,
    ]
  )

  return columns
}
