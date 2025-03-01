import React from "react"
import LinkComponent from "./LinkComponent"
import Menu from "./Menu"
import { Connect } from "./Connect"
import Image from "next/image"
import Logo from "@/assets/icons/logo.png"

export default function Header() {
  return (
    <header className="w-full max-w-full p-2.5 px-5 sticky top-0">
      <div className="flex justify-between items-center h-14 p-1.5 gap-6 rounded-full bg-white">
        <div className="flex">
          <LinkComponent href="/" className="flex items-center mr-12 ml-1">
            <Image src={Logo} alt="logo" width={30} height={30} />
            <h1 className="btn btn-ghost text-xl font-bold ml-2">{"Aswap"}</h1>
          </LinkComponent>
          <Menu />
        </div>
        <Connect />
      </div>
    </header>
  )
}
