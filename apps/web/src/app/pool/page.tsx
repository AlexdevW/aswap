import { Payment } from "./columns"
import PoolTable from "./_components/pool-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function Pool() {
  const data = await getData()
  return (
    <div className="container mx-auto py-20">
      <PoolTable data={data} />
    </div>
  )
}
