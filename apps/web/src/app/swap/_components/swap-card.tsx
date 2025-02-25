import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Token } from "@/types/swap"
import Balance from "./balance"

interface SwapCardProps {
  title: string
  options: Token[]
  amount?: number
  onAmountChange: (val?: string) => void
  token?: Token
  onTokenChange: (token?: Token) => void
}

export default function SwapCard({
  title,
  options,
  amount,
  onAmountChange,
  token,
  onTokenChange,
}: SwapCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center gap-x-2">
        <Input
          type="number"
          className="flex-1 text-xl !border-none shadow-none ring-0  focus-visible:ring-0 px-0"
          placeholder="0"
          value={amount ?? ""}
          onChange={(e) => onAmountChange(e.target.value)}
        />
        <Select
          onValueChange={(i) => onTokenChange(options[Number(i)])}
          value={token ? String(options.indexOf(token)) : ""}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="选择代币" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option, index) => {
              return (
                <SelectItem key={option.name} value={String(index)}>
                  {option.symbol}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>{/* US$0 */}</div>
        <div className="flex justify-between items-center">
          <span>
            <Balance token={token} />
          </span>
          <Button
            variant="secondary"
            size="sm"
            className="py-1 px-2 rounded-3xl h-auto ml-2"
          >
            最高
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
