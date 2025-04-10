import LinkComponent from "./link-component"
import { MenuMobile, MenuDesktop } from "./menu"
import { Connect } from "./connect"
import Image from "next/image"
import LogoSvg from "@/assets/icons/logo.svg"
import LocaleSwitcher from "./locale-switcher"
import { SITE_NAME } from "@/config/site"

export default function Header() {
  return (
    <header className="w-full max-w-full p-2.5 px-5 sticky top-0 z-10">
      <div className="flex justify-between items-center h-14 p-1.5 px-2.5 gap-6 rounded-full backdrop-blur-lg bg-white/80">
        <div className="flex items-center">
          <MenuMobile className="sm:hidden" />
          <LinkComponent href="/" className="flex items-center mr-12 ml-1">
            <Image
              src={LogoSvg}
              alt="Icon"
              className="w-8"
              width={32}
              height={32}
            />
            <h1 className="btn btn-ghost text-xl font-bold ml-2 text-primary">
              {SITE_NAME}
            </h1>
          </LinkComponent>
          <MenuDesktop className="max-sm:hidden" />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <LocaleSwitcher />
          </div>
          <Connect />
        </div>
      </div>
    </header>
  )
}
