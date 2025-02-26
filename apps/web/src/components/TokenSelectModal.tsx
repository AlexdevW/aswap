import useTokenBalance from "@/hooks/use-token-balance"
import { Token } from "@/types/swap"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Input } from "@workspace/ui/components/input"
import { Search } from "lucide-react"
import React, { useState } from "react"

function Balance({ token }: { token?: Token }) {
  return useTokenBalance(token)
}

export default function TokenSelectModal({
  trigger,
  options,
  onValueChange,
}: {
  trigger: React.ReactNode
  options: Token[]
  onValueChange: (token: Token) => void
}) {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredOptions = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return options

    return options.filter((token) => {
      const lowerName = token.name.toLowerCase()
      const lowerSymbol = token.symbol.toLowerCase()

      return (
        lowerName.includes(query) || // 包含匹配名称
        lowerSymbol.includes(query) // 包含匹配符号
      )
    })
  }, [options, searchQuery])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="px-0 max-w-[400px] w-[calc(100vw-30px)] !rounded-3xl bg-white">
        <DialogHeader className="px-6">
          <DialogTitle>选择代币</DialogTitle>
        </DialogHeader>
        <div className="px-4 relative">
          <Search size={20} className="absolute top-2.5 left-7" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索代币"
            className="flex-1 text-lg bg-secondary rounded-full py-5 pl-9 !border-none shadow-none ring-0  focus-visible:ring-0"
          />
        </div>
        <ul className="max-h-[600px] overflow-auto">
          {filteredOptions?.map((token, i) => {
            return (
              <li
                key={i}
                className="flex items-center justify-between mt-2 gap-2 hover:bg-secondary px-6 py-2.5 cursor-pointer transition-all"
                onClick={() => {
                  onValueChange(token)
                  setOpen(false)
                }}
              >
                <div className="flex gap-3 items-center">
                  <div className="size-10 bg-slate-400 rounded-full flex items-center justify-center">
                    {token.symbol.slice(-1)}
                  </div>
                  <div>
                    <div className="font-medium">{token.name}</div>
                    <div className="text-muted-foreground text-sm">
                      {token.symbol}
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <Balance token={token} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        {options.length <= 0 && (
          <div>当前没有可选的代币， 请在交易界面领取测试代币</div>
        )}
      </DialogContent>
    </Dialog>
  )
}
