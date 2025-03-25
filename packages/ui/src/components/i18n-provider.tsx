"use client"

import React, { useMemo } from "react"
import { merge } from "lodash-es"
import en from "../locales/en.json" assert { type: "json" }

export type Locale = typeof en

export const defaultLocale = en

interface ConfigConsumerProps {
  locale?: Partial<Locale>
  extendsContextFromParent?: boolean
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({})

interface UIConfigProviderProps {
  children?: React.ReactNode
  locale: Partial<Locale>
  extendsContextFromParent?: boolean
}

const ProviderChildren: React.FC<
  ConfigConsumerProps & {
    children?: React.ReactNode
    parentContext?: ConfigConsumerProps
  }
> = (props) => {
  const { children, parentContext, ...rest } = props
  const config = { ...parentContext }
  Object.keys(rest).forEach((key) => {
    const typedKey = key as keyof typeof rest
    if (rest[typedKey] !== undefined) {
      // @ts-expect-error -- TypeScript will validate that only known `rest`
      config[typedKey] = rest[typedKey]
    }
  })

  const mergeLocale = useMemo(() => {
    if (parentContext?.locale && rest.locale) {
      return merge(parentContext.locale, rest.locale)
    }
    return undefined
  }, [parentContext?.locale, rest.locale])

  config.locale = mergeLocale ?? config.locale

  return (
    <ConfigContext.Provider value={config as ConfigConsumerProps}>
      {children}
    </ConfigContext.Provider>
  )
}

const UIConfigProvider: React.FC<UIConfigProviderProps> = (props) => {
  const { extendsContextFromParent = true, ...restProps } = props
  const parentContext = React.useContext(ConfigContext)
  const context = extendsContextFromParent ? parentContext : undefined

  return (
    <ProviderChildren
      {...restProps}
      parentContext={context}
      extendsContextFromParent={extendsContextFromParent}
    />
  )
}

export { UIConfigProvider, type UIConfigProviderProps }
