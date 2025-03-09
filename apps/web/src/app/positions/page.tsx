import React from "react"
import PositionsTable from "./_components/positions-table"

export default function Positions() {
  return (
    <div className="container py-10 bg-white rounded-3xl w-full max-w-full">
      <div className="text-2xl font-bold">头寸</div>
      <PositionsTable />
    </div>
  )
}
