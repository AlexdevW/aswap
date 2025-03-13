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
  FormMessage,
} from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import TokenSelect from "@/components/token-select"
import useDebugTokensInfo from "@/hooks/use-debug-token-info"
import { Button } from "@workspace/ui/components/button"
import { Token } from "@/types/swap"
import useTokenBalance from "@/hooks/use-token-balance"
import { cn } from "@workspace/ui/lib/utils"
import { parseAmountToBigInt } from "@/lib/utils"
import { useTranslations } from "next-intl"

const formSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    tokenA: z
      .string()
      .min(42, { message: t("addressLength") })
      .max(42, { message: t("addressLength") })
      .regex(/^0x[a-fA-F0-9]{40}$/, { message: t("validEthereumAddress") }),
    tokenB: z
      .string()
      .min(42, { message: t("addressLength") })
      .max(42, { message: t("validEthereumAddress") }),
    index: z
      .number()
      .int()
      .min(0, { message: t("indexMin") }),
    amount0Desired: z.string().min(1, { message: t("enterAmount") }),
    amount1Desired: z.string().min(1, { message: t("enterAmount") }),
  })

export type PositionsFormType = z.infer<ReturnType<typeof formSchema>>

interface PositionsFormProps {
  onSubmit?: (values: PositionsFormType) => void
  defaultValues?: PositionsFormType
}

const TokenInput = ({
  field,
  token,
  balance,
  isInsufficientBalance,
}: {
  field: ControllerRenderProps<PositionsFormType>
  token?: Token
  balance?: string
  isInsufficientBalance?: boolean
}) => {
  const t = useTranslations("PositionsForm")
  return (
    <div className="py-2 pl-2 pr-4 bg-slate-200 rounded-xl">
      <div className="flex items-center gap-2 w-full justify-between">
        <Input
          {...field}
          className={cn(
            "flex-1 text-md rounded-full !border-none shadow-none ring-0  focus-visible:ring-0",
            {
              "text-red-400": isInsufficientBalance,
            }
          )}
          placeholder="0"
          type="number"
          onChange={(e) => {
            const value = e.target.value
            // 仅保留小数位数验证
            if (token?.decimals !== undefined) {
              const decimalPart = value.split(".")[1]
              if (decimalPart && decimalPart.length > token.decimals) {
                return
              }
            }
            field.onChange(value)
          }}
        />
        <div className="flex items-center gap-1">
          <div className="size-6 bg-slate-400 rounded-full flex items-center justify-center">
            {token?.name?.slice(-1)}
          </div>
          <div className="text-muted-foreground truncate text-md flex-1 text-left">
            {token?.name}
          </div>
        </div>
      </div>
      <div className="text-muted-foreground items-end flex justify-between">
        <span className="text-xs"></span>
        <span className="text-xs my-1">
          <span
            className={cn("text-sm font-bold", {
              "text-red-400": isInsufficientBalance,
            })}
          >
            {balance} {token?.symbol}
          </span>
          <Button
            variant="secondary"
            size="sm"
            type="button"
            className="py-1 px-2 rounded-3xl h-auto ml-2 bg-white hover:bg-white border-none active:scale-95"
            onClick={() => field.onChange(balance)}
          >
            {t("max")}
          </Button>
        </span>
      </div>
    </div>
  )
}

const TokenSelectTrigger = ({
  field,
  tokensInfo,
}: {
  field: ControllerRenderProps<PositionsFormType>
  tokensInfo: Record<string, Token>
}) => {
  return (
    <div className="flex items-center w-full px-3 gap-1.5 border rounded-xl h-12 text-muted-foreground transition-all justify-between">
      <div className="flex items-center gap-1 -ml-1.5 flex-1 overflow-hidden">
        <div className="size-7 bg-slate-400 rounded-full flex items-center justify-center">
          {tokensInfo[field.value]?.name?.slice(-1)}
        </div>
        <div className="text-muted-foreground truncate text-sm flex-1 text-left">
          {tokensInfo[field.value]?.name}
        </div>
      </div>
    </div>
  )
}

const PositionsForm = React.forwardRef<
  { submit: () => Promise<void> },
  PositionsFormProps
>(function PositionsForm({ onSubmit, defaultValues }: PositionsFormProps, ref) {
  const t = useTranslations("PositionsForm")
  const form = useForm<PositionsFormType>({
    resolver: zodResolver(formSchema(t)),
    defaultValues,
  })

  const { data: tokensInfo = {} } = useDebugTokensInfo()

  const [tokenAAddress, tokenBAddress, amount0Desired, amount1Desired] =
    form.watch(["tokenA", "tokenB", "amount0Desired", "amount1Desired"])
  const { balance: tokenABalance } = useTokenBalance(
    tokensInfo?.[tokenAAddress ?? ""]
  )
  const { balance: tokenBBalance } = useTokenBalance(
    tokensInfo?.[tokenBAddress ?? ""]
  )

  const isInsufficientBalanceA =
    parseAmountToBigInt(amount0Desired) >
    parseAmountToBigInt(tokenABalance ?? "0")
  const isInsufficientBalanceB =
    parseAmountToBigInt(amount1Desired) >
    parseAmountToBigInt(tokenBBalance ?? "0")

  function handleSubmit(values: PositionsFormType) {
    if (isInsufficientBalanceA || isInsufficientBalanceB) {
      return
    }
    onSubmit?.(values)
  }

  React.useImperativeHandle(ref, () => ({
    submit: async () => {
      return await form.handleSubmit(handleSubmit)()
    },
  }))

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
                    disabled
                    trigger={
                      <TokenSelectTrigger
                        field={field}
                        tokensInfo={tokensInfo}
                      />
                    }
                    options={getFilteredTokens(tokenAAddress)}
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
                    disabled
                    trigger={
                      <TokenSelectTrigger
                        field={field}
                        tokensInfo={tokensInfo}
                      />
                    }
                    options={getFilteredTokens(tokenAAddress)}
                    onValueChange={(token) => field.onChange(token.address)}
                    triggerWrapperClass="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {t("enterAmount")}
        </p>
        <FormField
          control={form.control}
          name="amount0Desired"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TokenInput
                  field={field}
                  token={tokensInfo[form.getValues().tokenA]}
                  isInsufficientBalance={!!isInsufficientBalanceA}
                  balance={tokenABalance}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount1Desired"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TokenInput
                  field={field}
                  token={tokensInfo[form.getValues().tokenB]}
                  isInsufficientBalance={!!isInsufficientBalanceB}
                  balance={tokenBBalance}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>{t("specifyLiquidity")}</FormDescription>
      </form>
    </Form>
  )
})

export default PositionsForm
