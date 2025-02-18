import React from 'react'
import LinkComponent from './LinkComponent'
import Menu from './Menu'
import { Connect } from './Connect'

export default function Header() {
  return (
    <header className='navbar bg-base-100 flex justify-between'>
      <div>
        <LinkComponent href='/' className='mr-20'>
          <h1 className='btn btn-ghost text-xl font-bold'>{'Aswap'}</h1>
        </LinkComponent>
        <Menu />
      </div>
      <Connect />
    </header>
  )
}
