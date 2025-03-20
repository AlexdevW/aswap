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
  label: string
}

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const t = useTranslations("LocaleSwitcher")

  async function onSelectChange(nextLocale: Locale) {
    // 兼容 next-intl 的 syncLocaleCookie 调用顺序错误, 导致多语言更新失败问题
    await Promise.resolve()
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
        {/* 不实用 SelectValue 避免首批展示未渲染问题 */}
        <SelectTrigger>{t("locale", { locale: defaultValue })}</SelectTrigger>
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
