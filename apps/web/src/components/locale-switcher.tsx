import { useLocale } from "next-intl"
import LocaleSwitcherSelect from "./locale-switcher-select"

export default function LocaleSwitcher() {
  const locale = useLocale()

  return <LocaleSwitcherSelect defaultValue={locale} />
}
