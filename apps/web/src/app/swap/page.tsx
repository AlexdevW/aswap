import { useAccount } from "wagmi"
import Faucet from "./_components/faucet"
import Swap from "./_components/swap"

export default function Index() {
  return (
    <div>
      <Swap />
      <Faucet />
    </div>
  )
}
