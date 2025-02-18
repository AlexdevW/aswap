import React from 'react'
import LinkComponent from './LinkComponent'

export default function Menu() {
  return (
    <div>
      <LinkComponent href='/swap'>
        <div className='text-xl btn btn-ghost'>swap</div>
      </LinkComponent>

      <LinkComponent href='/pool' className='ml-5'>
        <div className='text-xl btn btn-ghost'>pool</div>
      </LinkComponent>
    </div>
  )
}
