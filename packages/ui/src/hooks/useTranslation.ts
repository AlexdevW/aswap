import { useCallback, useContext } from "react"
import {
  ConfigContext,
  defaultLocale,
  Locale,
} from "@workspace/ui/components/i18n-provider"

type NestedKeyOf<ObjectType> = ObjectType extends object
  ? {
      [Property in keyof ObjectType]:
        | `${Property & string}`
        | `${Property & string}.${NestedKeyOf<ObjectType[Property]>}`
    }[keyof ObjectType]
  : never

export type NestedValueOf<
  ObjectType,
  Path extends string,
> = Path extends `${infer Cur}.${infer Rest}`
  ? Cur extends keyof ObjectType
    ? NestedValueOf<ObjectType[Cur], Rest>
    : never
  : Path extends keyof ObjectType
    ? ObjectType[Path]
    : never

type NamespaceKeys<
  ObjectType,
  AllKeys extends string = NestedKeyOf<ObjectType>,
> = {
  [PropertyPath in AllKeys]: NestedValueOf<
    ObjectType,
    PropertyPath
  > extends string
    ? never
    : PropertyPath
}[AllKeys]

function useTranslation<NestedKey extends NamespaceKeys<Locale> = never>(
  namespace?: NestedKey
) {
  const { locale = defaultLocale } = useContext(ConfigContext)

  const translation = useCallback(
    (
      key: [NestedKey] extends [never]
        ? Exclude<NestedKeyOf<Locale>, NamespaceKeys<Locale>>
        : NestedKeyOf<NestedValueOf<Locale, NestedKey>>,
      values?: Record<string, unknown>
    ): string => {
      const fullPath = namespace ? `${namespace}.${key}` : (key as string)

      let current = locale as unknown as Record<string, unknown>
      const pathParts = fullPath.split(".")

      for (const part of pathParts) {
        if (
          current == null ||
          typeof current !== "object" ||
          !(part in current)
        ) {
          console.warn(`Translation key "${fullPath}" not found`)
          return fullPath
        }
        current = current[part] as Record<string, unknown>
      }

      if (typeof current !== "string") {
        console.warn(`Translation key "${fullPath}" is not a string`)
        return fullPath
      }

      if (!values) return current

      return (current as string).replace(
        /\{([\w.]+)\}/g,
        (match: string, valKey: string) => {
          const replacement = values[valKey]
          return replacement != null ? String(replacement) : match
        }
      )
    },
    [namespace, locale]
  )

  return translation
}

export default useTranslation
