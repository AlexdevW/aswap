import type { Pool } from "@/types/pool"
import PoolTable from "./_components/pool-table"

export default function Pool() {
  return (
    <div className="container py-10 bg-white rounded-3xl w-full max-w-full">
      <div className="text-2xl font-bold">资金池</div>
      <PoolTable />
    </div>
  )
}
