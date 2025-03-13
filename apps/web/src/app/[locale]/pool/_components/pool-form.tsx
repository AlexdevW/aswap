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
import { useTranslations } from "next-intl"

function createFormSchema(t: ReturnType<typeof useTranslations>) {
  return z
    .object({
      tokenA: z
        .string()
        .min(42, { message: t("addressLength") })
        .max(42, { message: t("addressLength") })
        .regex(/^0x[a-fA-F0-9]{40}$/, { message: t("validEthereumAddress") }),
      tokenB: z
        .string()
        .min(42, { message: t("addressLength") })
        .max(42, { message: t("addressLength") })
        .regex(/^0x[a-fA-F0-9]{40}$/, { message: t("validEthereumAddress") }),
      fee: z.number().refine((val) => [3000, 500, 10000].includes(val), {
        message: t("validFeeLevel"),
      }),
      priceLower: z
        .string({ message: t("priceLowerEmpty") })
        .refine((val) => /^-?\d+(\.\d{1,18})?$/.test(val), {
          message: t("maxDecimals"),
        })
        .refine((val) => Number(val) !== 0, {
          message: t("priceNotZero"),
        }),
      priceUpper: z
        .string({ message: t("priceUpperEmpty") })
        .refine((val) => /^-?\d+(\.\d{1,18})?$/.test(val), {
          message: t("maxDecimals"),
        })
        .refine((val) => Number(val) !== 0, {
          message: t("priceNotZero"),
        }),
      price: z
        .string({ message: t("priceEmpty") })
        .refine((val) => /^-?\d+(\.\d{1,18})?$/.test(val), {
          message: t("maxDecimals"),
        })
        .refine((val) => Number(val) !== 0, {
          message: t("priceNotZero"),
        }),
    })
    .superRefine((values, ctx) => {
      const lower = Number(values.priceLower)
      const upper = Number(values.priceUpper)
      if (upper <= lower) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t("priceUpperGreater"),
          path: ["priceUpper"],
        })
      }
    })
}

export type PoolFormType = z.infer<ReturnType<typeof createFormSchema>>

interface PoolFormProps {
  onSubmit?: (values: PoolFormType) => void
}

const TokenSelectTrigger = ({
  field,
  tokensInfo,
}: {
  field: ControllerRenderProps<PoolFormType>
  tokensInfo: Record<string, Token>
}) => {
  const t = useTranslations("PoolForm")
  return (
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
        <span className="font-semibold">{t("selectTokenPair")}</span>
      )}
      <ChevronDown />
    </div>
  )
}

const PoolForm = React.forwardRef<
  { submit: () => Promise<void> },
  PoolFormProps
>(function PoolForm({ onSubmit }: PoolFormProps, ref) {
  const t = useTranslations("PoolForm")
  const formSchema = createFormSchema(t)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tokenA: getContractAddress("DebugTokenA"),
      tokenB: getContractAddress("DebugTokenB"),
      fee: 500,
      priceLower: "0.000001",
      priceUpper: "1000000",
      price: "1",
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
          {t("selectTokenPair")}
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
              <FormLabel>{t("fee")}</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(val) => field.onChange(Number(val))}
                  defaultValue={String(field.value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"500"}>{t("fee500")}</SelectItem>
                    <SelectItem value={"3000"}>{t("fee3000")}</SelectItem>
                    <SelectItem value={"10000"}>{t("fee10000")}</SelectItem>
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
                <FormLabel>{t("priceLower")}</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>{t("priceLowerDescription")}</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priceUpper"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>{t("priceUpper")}</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
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
                  {t("initialPrice")}
                  <span className="ml-2">
                    ({token0Symbol}/{token1Symbol})
                  </span>
                </FormLabel>
                <FormControl>
                  <div className="flex w-full items-center space-x-2">
                    <Input className="flex-1" type="number" {...field} />
                    <div className="whitespace-nowrap text-muted-foreground font-semibold text-sm">
                      {t("priceDescription", {
                        token0Symbol: token0Symbol ?? "",
                        token1Symbol: token1Symbol ?? "",
                      })}
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
