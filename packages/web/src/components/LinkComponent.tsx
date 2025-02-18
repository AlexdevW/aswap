import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
  isExternal?: boolean
  className?: string
}

export default function LinkComponent({ href, children, isExternal, className }: Props) {
  if (isExternal || href.match(/^([a-z0-9]*:|.{0})\/\/.*$/)) {
    return (
      <Link className={className} href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </Link>
    )
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  )
}
