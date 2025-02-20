import React from "react"
import LinkComponent from "./LinkComponent"

export default function Menu() {
  return (
    <div className="flex">
      <LinkComponent href="/swap">
        <div className="text-xl btn ">swap</div>
      </LinkComponent>

      <LinkComponent href="/pool" className="ml-5">
        <div className="text-xl btn ">pool</div>
      </LinkComponent>
    </div>
  )
}
