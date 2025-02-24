import type { Pool } from "@/types/pool"
import PoolTable from "./_components/pool-table"

export default function Pool() {
  return (
    <div className="container mx-auto py-20">
      <PoolTable />
    </div>
  )
}
