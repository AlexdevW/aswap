import { useTranslations } from "next-intl"

/**
 * 处理交易相关错误并返回国际化的错误消息
 * @param error 捕获的错误
 * @returns 用户友好的错误消息
 */
export function handleTransactionError(
  error: unknown,
  t: ReturnType<typeof useTranslations<"TransactionError">>
): string {
  if (error instanceof Error) {
    const message = error.message.toLowerCase()

    if (message.includes("user rejected") || message.includes("user denied")) {
      return t("userRejected")
    }

    if (message.includes("insufficient funds")) {
      return t("insufficientFunds")
    }

    if (message.includes("timeout") || message.includes("timed out")) {
      return t("timeout")
    }

    if (message.includes("network") || message.includes("connection")) {
      return t("networkError")
    }

    return t("defaultError", { errorMessage: error.message })
  }

  return t("unknownError")
}
