import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { Info, Settings2, AlertTriangle } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"

import {
  NumberField,
  NumberFieldInput,
} from "@workspace/ui/components/number-field"

export interface SettingsProps {
  onDeadlineChange?: (minutes: number) => void
  onSlippageChange?: (slippage: number | undefined) => void
}

export default function Settings({
  onDeadlineChange,
  onSlippageChange,
}: SettingsProps) {
  const t = useTranslations("Settings")
  const [slippage, setSlippage] = useState<number | undefined>(0.5)
  const [deadline, setDeadline] = useState<number>(30)

  const handleSlippageChange = (value: number) => {
    const val = isNaN(value) ? undefined : value
    setSlippage(val)
    onSlippageChange?.(val)
  }

  const handleDeadlineChange = (value: number) => {
    const val = isNaN(value) ? 30 : value
    setDeadline(val)
    onDeadlineChange?.(val)
  }

  const isHighSlippage = slippage !== undefined && slippage > 5

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex justify-between items-center w-full px-1.5 py-1">
        <div className="px-2 py-1 rounded-full text-base leading-4 tracking-tight font-medium text-muted-foreground">
          {t("swap")}
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
                <span>{t("slippageLimit")}</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info size={16} />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-64">
                    {t("slippageInfo")}
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-1 relative">
                <span
                  className="absolute left-1 top-1/2 -translate-y-1/2 text-sm rounded-full bg-secondary px-2 py-0.5 cursor-pointer hover:bg-secondary/80 transition-colors"
                  onClick={() => setSlippage(0.5)}
                >
                  {t("auto")}
                </span>
                <NumberField
                  maxValue={60}
                  minValue={0}
                  value={slippage}
                  placeholder="0.50"
                  formatOptions={{
                    maximumFractionDigits: 2,
                    useGrouping: false,
                  }}
                  onChange={handleSlippageChange}
                >
                  <NumberFieldInput className="w-28 rounded-full h-8 pr-6 pl-12 text-right" />
                </NumberField>
                <span className="absolute right-2 top-1">%</span>
              </div>
            </div>
            {isHighSlippage && (
              <div className="flex items-center gap-1 text-amber-500 mt-0.5 mb-3 text-xs pl-1">
                <AlertTriangle size={14} />
                <span>{t("highSlippageWarning")}</span>
              </div>
            )}
            <div className="flex gap-2 justify-between items-center">
              <div className="text-sm text-muted-foreground whitespace-nowrap flex items-center gap-1">
                <span>{t("transactionDeadline")}</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info size={16} />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-64">
                    {t("deadlineInfo")}
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-1 relative">
                <NumberField
                  maxValue={4320}
                  minValue={1}
                  value={deadline}
                  placeholder="30"
                  formatOptions={{
                    maximumFractionDigits: 2,
                    useGrouping: false,
                  }}
                  onChange={handleDeadlineChange}
                >
                  <NumberFieldInput className="w-28 rounded-full h-8 pr-[70px] text-right" />
                </NumberField>
                <span className="absolute right-2 top-1">minutes</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  )
}
