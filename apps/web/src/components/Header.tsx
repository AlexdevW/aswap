import React from "react"
import LinkComponent from "./LinkComponent"
import Menu from "./Menu"
import { Connect } from "./Connect"

export default function Header() {
  return (
    <header className="bg-base-100 flex justify-between items-center px-4 h-16 border-b">
      <div className="flex">
        <LinkComponent href="/" className="mr-20">
          <h1 className="btn btn-ghost text-xl font-bold">{"Aswap"}</h1>
        </LinkComponent>
        <Menu />
      </div>
      <Connect />
    </header>
  )
}
