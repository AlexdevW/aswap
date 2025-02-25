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
}

export function getColumns({
  account,
  refetch,
  writePositionManagerBurn,
  writePositionManagerCollect,
}: GetColumnsType): ColumnDef<Positions>[] {
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
      cell: ({ row }) => <div>{shortenAddress(row.original.owner)}</div>,
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
    {
      accessorKey: "actions",
      header: "Actions",
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
                      toast.error(error.message)
                    }
                  }
                }}
              >
                Remove
              </Button>
            )}
            {(row.original.tokensOwed0 > 0 || row.original.tokensOwed1 > 0) && (
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
                      toast.error(error.message)
                    }
                  }
                }}
              >
                Collect
              </Button>
            )}
          </div>
        )
      },
    },
  ]
}
