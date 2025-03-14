import "use-intl"
import messages from "./src/messages/en.json"
import { locales } from "./src/config/locale.ts"

declare module "use-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number]
    Messages: typeof messages
  }
}
