/**
 * 处理交易相关错误并返回用户友好的错误消息
 * @param error 捕获的错误
 * @returns 用户友好的错误消息
 */
export function handleTransactionError(error: unknown): string {
  if (error instanceof Error) {
    const message = error.message.toLowerCase()

    // 用户拒绝交易
    if (message.includes("user rejected") || message.includes("user denied")) {
      return "用户拒绝了交易"
    }

    // 余额不足
    if (message.includes("insufficient funds")) {
      return "余额不足，请检查您的资金"
    }

    // 交易超时
    if (message.includes("timeout") || message.includes("timed out")) {
      return "交易超时，请稍后重试"
    }

    // 网络错误
    if (message.includes("network") || message.includes("connection")) {
      return "网络连接错误，请检查您的网络状态"
    }

    // 默认返回原始错误信息
    return `操作失败: ${error.message}`
  }

  return "发生未知错误"
}
