import LinkComponent from "./link-component"
import { MenuMobile, MenuDesktop } from "./menu"
import { Connect } from "./connect"
import Image from "next/image"
import Logo from "@/assets/icons/logo.png"
import LocaleSwitcher from "./locale-switcher"

export default function Header() {
  return (
    <header className="w-full max-w-full p-2.5 px-5 sticky top-0">
      <div className="flex justify-between items-center h-14 p-1.5 px-2.5 gap-6 rounded-full bg-white">
        <div className="flex items-center">
          <MenuMobile className="sm:hidden" />
          <LinkComponent href="/" className="flex items-center mr-12 ml-1">
            <Image src={Logo} alt="logo" width={30} height={30} />
            <h1 className="btn btn-ghost text-xl font-bold ml-2">{"Aswap"}</h1>
          </LinkComponent>
          <MenuDesktop className="max-sm:hidden" />
        </div>
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <Connect />
        </div>
      </div>
    </header>
  )
}
