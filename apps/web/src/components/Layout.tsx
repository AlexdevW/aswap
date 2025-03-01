import React, { PropsWithChildren } from "react"
import Header from "./Header"

export function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-5">{props.children}</main>
    </div>
  )
}
