"use client"

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"
import { NuqsAdapter } from "@workspace/ui/components/data-table"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <NuqsAdapter>{children}</NuqsAdapter>
    </NextThemesProvider>
  )
}
