import Faucet from "./_components/faucet"
import Swap from "./_components/swap"

export default async function Index() {
  return (
    <div>
      <Swap />
      <Faucet />
    </div>
  )
}
