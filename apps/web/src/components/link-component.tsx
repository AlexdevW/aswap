import Link from "next/link"
import React, { ComponentProps } from "react"

interface Props extends ComponentProps<typeof Link> {
  isExternal?: boolean
}

export default function LinkComponent({
  href,
  children,
  isExternal,
  ...rest
}: Props) {
  const hrefString = typeof href === "string" ? href : href.href || ""
  const protocol = typeof href === "string" ? "" : href.protocol || ""
  const isExternalLink =
    isExternal || /^([a-z0-9]*:|.{0})\/\/.*$/.test(hrefString || protocol)

  if (isExternalLink) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}
