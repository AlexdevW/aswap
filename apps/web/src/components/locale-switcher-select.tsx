"use client"

import { useSearchParams } from "next/navigation"
import { Locale, useTranslations } from "next-intl"
import { useTransition } from "react"
import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@workspace/ui/components/select"

type Props = {
  defaultValue: string
}

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const t = useTranslations("LocaleSwitcher")

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        { pathname, query: Object.fromEntries(searchParams.entries()) },
        { locale: nextLocale }
      )
    })
  }

  return (
    <div>
      <Select
        disabled={isPending}
        defaultValue={defaultValue}
        onValueChange={onSelectChange}
      >
        <SelectTrigger className="btn btn-ghost rounded-full">
          {/* 不使用 SelectValue 避免首批展示未渲染问题 */}
          {t("locale", { locale: defaultValue })}
        </SelectTrigger>
        <SelectContent>
          {routing.locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {t("locale", { locale: cur })}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
