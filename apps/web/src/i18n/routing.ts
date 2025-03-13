import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "zh"],
  // Used when no locale matches
  defaultLocale: "en",
  // 默认语言不重定向
  localePrefix: "as-needed",
})
