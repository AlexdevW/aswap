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
      // 避免切换到默认语言时, 跳转地址不带语言前缀,导致 intl-next 根据旧cookie进行判断还是切换到之前语言问题
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/`
      router.replace(
        { pathname, query: Object.fromEntries(searchParams.entries()) },
        { locale: nextLocale }
      )
    })
  }

  return (
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
  )
}
