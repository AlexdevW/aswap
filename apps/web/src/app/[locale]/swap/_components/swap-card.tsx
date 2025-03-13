import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Token } from "@/types/swap"
import { ChevronDown } from "lucide-react"
import TokenSelect from "@/components/token-select"
import { isUndefined } from "lodash-es"
import { cn } from "@workspace/ui/lib/utils"
import { parseAmountToBigInt } from "@/lib/utils"
import { useTranslations } from "next-intl"

interface SwapCardProps {
  title: string
  options: Token[]
  amount?: string
  onAmountChange: (val?: string) => void
  token?: Token
  onTokenChange: (token?: Token) => void
  sellModel?: boolean
  balance?: string
}

export default function SwapCard({
  title,
  options,
  amount,
  onAmountChange,
  token,
  onTokenChange,
  sellModel,
  balance,
}: SwapCardProps) {
  const t = useTranslations("Swap")

  const isInsufficientBalance =
    sellModel &&
    amount &&
    balance &&
    parseAmountToBigInt(amount, token) > parseAmountToBigInt(balance, token)

  return (
    <Card className="w-full rounded-3xl border-none shadow-none bg-secondary">
      <CardHeader className="pb-3">
        <CardTitle className="text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center gap-x-2 py-4 pt-0">
        <Input
          type="number"
          className={cn(
            "block overflow-hidden text-xl !border-none shadow-none ring-0 focus-visible:ring-0 px-0",
            {
              "text-red-400": isInsufficientBalance,
            }
          )}
          placeholder="0"
          value={amount ?? ""}
          onChange={(e) => {
            const value = e.target.value
            // 仅保留小数位数验证
            if (token?.decimals !== undefined) {
              const decimalPart = value.split(".")[1]
              if (decimalPart && decimalPart.length > token.decimals) {
                return
              }
            }
            onAmountChange(value)
          }}
        />
        <TokenSelect
          trigger={
            <div className="flex items-center bg-white max-w-48 px-3 gap-1.5 shadow-sm rounded-3xl h-9 cursor-pointer text-muted-foreground active:scale-95 transition-all">
              <>
                {token ? (
                  <div className="flex items-center gap-1 -ml-1.5">
                    <div className="size-7 bg-slate-400 rounded-full flex items-center justify-center">
                      {token.symbol?.slice(-1)}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {token.symbol}
                    </div>
                  </div>
                ) : (
                  <span className="font-semibold">{t("selectToken")}</span>
                )}
                <ChevronDown />
              </>
            </div>
          }
          options={options}
          onValueChange={(token) => onTokenChange(token)}
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>{/* US$0 */}</div>
        <div className="flex justify-between items-center">
          <span
            className={cn({
              "text-red-400": isInsufficientBalance,
            })}
          >
            {balance} {token?.symbol}
          </span>
          {sellModel && (
            <Button
              variant="secondary"
              size="sm"
              className="py-1 px-2 rounded-3xl h-auto ml-2 bg-white hover:bg-white border-none active:scale-95"
              onClick={() =>
                onAmountChange(isUndefined(balance) ? "" : String(balance))
              }
            >
              {t("max")}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
