"use client"

import React from "react"
import { ControllerRenderProps, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import { getContractAddress } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import TokenSelect from "@/components/token-select"
import { ChevronDown } from "lucide-react"
import useDebugTokensInfo from "@/hooks/use-debug-token-info"
import { Token } from "@/types/swap"

const formSchema = z.object({
  tokenA: z
    .string()
    .min(42, "地址长度必须为42字符")
    .max(42, "地址长度必须为42字符")
    .regex(/^0x[a-fA-F0-9]{40}$/, "必须是有效的以太坊地址"),
  tokenB: z
    .string()
    .min(42, "地址长度必须为42字符")
    .max(42, "地址长度必须为42字符")
    .regex(/^0x[a-fA-F0-9]{40}$/, "必须是有效的以太坊地址"),
  fee: z.number().refine((val) => [3000, 500, 10000].includes(val), {
    message: "请选择有效费率等级",
  }),
  priceLower: z
    .number({ message: "最低价格不能为空" })
    .min(0.000001, "最低价格不能低于0.000001"),
  priceUpper: z
    .number({ message: "最高价格不能为空" })
    .max(Number.MAX_SAFE_INTEGER, `最高价格不能超过${Number.MAX_SAFE_INTEGER}`),
  price: z
    .number({ message: "价格不能为空" })
    .min(0.000001, "价格不能低于0.000001")
    .max(Number.MAX_SAFE_INTEGER, `价格不能超过${Number.MAX_SAFE_INTEGER}`)
    .multipleOf(0.000001, "最多支持6位小数"),
})

export type PoolFormType = z.infer<typeof formSchema>

interface PoolFormProps {
  onSubmit?: (values: z.infer<typeof formSchema>) => void
}

const TokenSelectTrigger = ({
  field,
  tokensInfo,
}: {
  field: ControllerRenderProps<PoolFormType>
  tokensInfo: Record<string, Token>
}) => (
  <div className="flex items-center w-full px-3 gap-1.5 border rounded-xl h-12 cursor-pointer text-muted-foreground active:scale-95 transition-all justify-between">
    {field.value ? (
      <div className="flex items-center gap-1 -ml-1.5 flex-1 overflow-hidden">
        <div className="size-7 bg-slate-400 rounded-full flex items-center justify-center">
          {tokensInfo[field.value]?.name?.slice(-1)}
        </div>
        <div className="text-muted-foreground truncate text-sm flex-1 text-left">
          {tokensInfo[field.value]?.name}
        </div>
      </div>
    ) : (
      <span className="font-semibold">选择代币</span>
    )}
    <ChevronDown />
  </div>
)

const PoolForm = React.forwardRef<
  { submit: () => Promise<void> },
  PoolFormProps
>(function PoolForm({ onSubmit }: PoolFormProps, ref) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tokenA: getContractAddress("DebugTokenA"),
      tokenB: getContractAddress("DebugTokenB"),
      fee: 500,
      priceLower: 0.000001,
      priceUpper: 1000000,
      price: 1,
    },
  })

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit?.(values)
  }

  React.useImperativeHandle(ref, () => ({
    submit: async () => {
      return await form.handleSubmit(handleSubmit)()
    },
  }))

  const { data: tokensInfo = {} } = useDebugTokensInfo()

  const getFilteredTokens = React.useCallback(
    (excludeAddress?: string) => {
      return Object.values(tokensInfo).filter(
        (token) => token.address !== excludeAddress
      )
    },
    [tokensInfo]
  )

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(handleSubmit)}>
        <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          请选择代币对
        </p>
        <div className="flex justify-between gap-2">
          <FormField
            control={form.control}
            name="tokenA"
            render={({ field }) => (
              <FormItem className="flex-1 overflow-hidden">
                <FormControl>
                  <TokenSelect
                    trigger={
                      <TokenSelectTrigger
                        field={field}
                        tokensInfo={tokensInfo}
                      />
                    }
                    options={getFilteredTokens(form.getValues().tokenB)}
                    onValueChange={(token) => field.onChange(token.address)}
                    triggerWrapperClass="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tokenB"
            render={({ field }) => (
              <FormItem className="flex-1 overflow-hidden">
                <FormControl>
                  <TokenSelect
                    trigger={
                      <TokenSelectTrigger
                        field={field}
                        tokensInfo={tokensInfo}
                      />
                    }
                    options={getFilteredTokens(form.getValues().tokenA)}
                    onValueChange={(token) => field.onChange(token.address)}
                    triggerWrapperClass="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="fee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>手续费</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(val) => field.onChange(Number(val))}
                  defaultValue={String(field.value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"500"}>0.05%</SelectItem>
                    <SelectItem value={"3000"}>0.3%</SelectItem>
                    <SelectItem value={"10000"}>1%</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-2">
          <FormField
            control={form.control}
            name="priceLower"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>最低价格</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value
                      field.onChange(value === "" ? "" : Number(value))
                    }}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>在价格范围内参与市场交易</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priceUpper"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>最高价格</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value
                      field.onChange(value === "" ? "" : Number(value))
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => {
            const { tokenA, tokenB } = form.getValues()
            const [token0, token1] =
              tokenA < tokenB ? [tokenA, tokenB] : [tokenB, tokenA]
            const token0Symbol = tokensInfo[token0]?.symbol
            const token1Symbol = tokensInfo[token1]?.symbol

            return (
              <FormItem>
                <FormLabel>
                  初始价格
                  <span className="ml-2">
                    ({token0Symbol}/{token1Symbol})
                  </span>
                </FormLabel>
                <FormControl>
                  <div className="flex w-full items-center space-x-2">
                    <Input
                      className="flex-1"
                      type="number"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value
                        field.onChange(value === "" ? "" : Number(value))
                      }}
                    />
                    <div className="whitespace-nowrap text-muted-foreground font-semibold text-sm">
                      {token1Symbol} 每 {token0Symbol}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </form>
    </Form>
  )
})

export default PoolForm
