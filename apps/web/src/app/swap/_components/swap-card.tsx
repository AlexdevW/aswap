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
import TokenSelectModal from "@/components/TokenSelectModal"
import { isUndefined } from "lodash-es"
import { cn } from "@workspace/ui/lib/utils"

interface SwapCardProps {
  title: string
  options: Token[]
  amount?: number
  onAmountChange: (val?: string) => void
  token?: Token
  onTokenChange: (token?: Token) => void
  sellModel?: boolean
  balance?: number
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
  const isInsufficientBalance =
    sellModel && amount && balance && amount > balance
  return (
    <Card className="w-full rounded-3xl border-none shadow-none bg-secondary">
      <CardHeader className="pb-3">
        <CardTitle className="text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center gap-x-2 py-4 pt-0">
        <Input
          type="number"
          className={cn(
            "flex-1 text-xl !border-none shadow-none ring-0  focus-visible:ring-0 px-0",
            {
              "text-red-400": isInsufficientBalance,
            }
          )}
          placeholder="0"
          value={amount ?? ""}
          onChange={(e) => onAmountChange(e.target.value)}
        />
        <TokenSelectModal
          trigger={
            <div className="flex items-center bg-white max-w-48 px-3 gap-1.5 shadow-sm rounded-3xl h-9 cursor-pointer text-muted-foreground active:scale-95 transition-all">
              <>
                {token ? (
                  <div className="flex items-center gap-1 -ml-1.5">
                    <div className="size-7 bg-slate-400 rounded-full flex items-center justify-center">
                      {token.symbol.slice(-1)}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {token.symbol}
                    </div>
                  </div>
                ) : (
                  <span className="font-semibold">选择代币</span>
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
            {balance}
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
              最高
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
