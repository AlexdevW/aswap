import React from 'react'

export function Connect() {
  return (
    <div>
      {/* @ts-expect-error msg */}
      <appkit-button label='Connect' balance='hide' size='sm' />
    </div>
  )
}
