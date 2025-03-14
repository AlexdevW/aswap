"use client"
import React from "react"
import { IntlProvider } from "use-intl"
import en from "@workspace/ui/messages/en.json" assert { type: "json" }

const defaultMessages = en
export type UIConfigProviderProps = React.ComponentProps<typeof IntlProvider>

/**
 * UI 组件库统一配置提供者
 *
 * 提供主题、国际化等全局配置能力
 */
export function UIConfigProvider({
  children,
  ...restProps
}: UIConfigProviderProps) {
  return (
    <IntlProvider messages={defaultMessages} {...restProps}>
      {children}
    </IntlProvider>
  )
}
