import { DependencyList, useRef, useMemo } from "react"

const isPrimitive = (val: unknown) => val !== Object(val)

type DepsEqualFnType<TDeps extends DependencyList> = (
  prevDeps: TDeps,
  nextDeps: TDeps
) => boolean

const useCustomCompareMemo = <TDeps extends DependencyList, T>(
  factory: () => T,
  deps: TDeps,
  depsEqual: DepsEqualFnType<TDeps>
): T => {
  if (process.env.NODE_ENV !== "production") {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn(
        "`useCustomCompareMemo` should not be used with no dependencies. Use React.useMemo instead."
      )
    }

    if (deps.every(isPrimitive)) {
      console.warn(
        "`useCustomCompareMemo` should not be used with dependencies that are all primitive values. Use React.useMemo instead."
      )
    }

    if (typeof depsEqual !== "function") {
      console.warn(
        "`useCustomCompareMemo` should be used with depsEqual callback for comparing deps list"
      )
    }
  }

  const ref = useRef<TDeps | undefined>(undefined)

  if (!ref.current || !depsEqual(deps, ref.current)) {
    ref.current = deps
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, ref.current)
}

export default useCustomCompareMemo
