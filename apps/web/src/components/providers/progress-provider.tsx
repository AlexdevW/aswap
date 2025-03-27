"use client"

import { ProgressProvider as BProgressProvider } from "@bprogress/next/app"

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BProgressProvider
      height="2px"
      color="#3b82f6"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </BProgressProvider>
  )
}

export default ProgressProvider
