import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Input } from "@workspace/ui/components/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { Info, Settings2, AlertTriangle } from "lucide-react"
import { useState } from "react"

export interface SettingsProps {
  onDeadlineChange?: (minutes: number) => void
  onSlippageChange?: (slippage: number | undefined) => void
}

export default function Settings({
  onDeadlineChange,
  onSlippageChange,
}: SettingsProps) {
  const [slippage, setSlippage] = useState<number | undefined>(0.5)
  const [deadline, setDeadline] = useState<number>(30)

  const handleSlippageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? undefined : Number(e.target.value)
    setSlippage(value)
    onSlippageChange?.(value)
  }

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 30 : Number(e.target.value)
    setDeadline(value)
    onDeadlineChange?.(value)
  }

  const isHighSlippage = slippage !== undefined && slippage > 5

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex justify-between items-center w-full px-1.5 py-1">
        <div className="px-2 py-1 rounded-full text-base leading-4 tracking-tight font-medium text-muted-foreground">
          swap
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Settings2
              size={30}
              className="opacity-50 rounded-lg hover:opacity-100 transition-all hover:bg-secondary p-1 cursor-pointer"
            />
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="end"
            className="rounded-2xl shadow-md border-secondary py-5"
          >
            <div className="flex gap-4 justify-between items-center mb-4">
              <div className="text-sm text-muted-foreground whitespace-nowrap flex items-center gap-1">
                <span>滑点上限</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info size={16} />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-64">
                    如果价格变动超过滑点百分比，则你的交易将撤回。
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-1 relative">
                <span
                  className="absolute left-1 top-1/2 -translate-y-1/2 text-sm rounded-full bg-secondary px-2 py-0.5 cursor-pointer hover:bg-secondary/80 transition-colors"
                  onClick={() => setSlippage(0.5)}
                >
                  自动
                </span>
                <Input
                  className="w-28 rounded-full h-8 pr-6 pl-12 text-right"
                  placeholder="0.50"
                  type="number"
                  max={60}
                  min={0}
                  value={slippage ?? ""}
                  onChange={handleSlippageChange}
                />
                <span className="absolute right-2 top-1">%</span>
              </div>
            </div>
            {isHighSlippage && (
              <div className="flex items-center gap-1 text-amber-500 mt-0.5 mb-3 text-xs pl-1">
                <AlertTriangle size={14} />
                <span>滑点设置过高，可能导致交易损失较大</span>
              </div>
            )}
            <div className="flex gap-2 justify-between items-center">
              <div className="text-sm text-muted-foreground whitespace-nowrap flex items-center gap-1">
                <span>交易截止日期</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info size={16} />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-64">
                    如果你的交易处于待处理状态超过该时间，则交易将被撤销。（最长时间：3
                    天）。
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-1 relative">
                <Input
                  className="w-28 rounded-full h-8 pr-[70px] text-right"
                  placeholder="30"
                  type="number"
                  max={4320}
                  min={1}
                  value={deadline ?? ""}
                  onChange={handleDeadlineChange}
                />
                <span className="absolute right-2 top-1">minutes</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  )
}
