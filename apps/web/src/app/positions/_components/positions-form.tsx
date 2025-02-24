"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import { getContractAddress } from "@/lib/utils"

const formSchema = z
  .object({
    token0: z
      .string()
      .min(42, "地址长度必须为42字符")
      .max(42, "地址长度必须为42字符")
      .regex(/^0x[a-fA-F0-9]{40}$/, "必须是有效的以太坊地址"),
    token1: z
      .string()
      .min(42, "地址长度必须为42字符")
      .max(42, "地址长度必须为42字符")
      .regex(/^0x[a-fA-F0-9]{40}$/, "必须是有效的以太坊地址"),
    index: z.number().int().min(0, "索引不能小于0"),
    amount0Desired: z
      .string()
      .min(1, "不能为空")
      .regex(/^[0-9]+$/, "必须为有效的数字字符串"),
    amount1Desired: z
      .string()
      .min(1, "不能为空")
      .regex(/^[0-9]+$/, "必须为有效的数字字符串"),
  })
  .refine((data) => data.token0.toLowerCase() < data.token1.toLowerCase(), {
    message: "Token0地址必须按字母顺序排在Token1之前，请交换代币位置",
    path: ["token1"],
  })

export type PositionsFormType = z.infer<typeof formSchema>

interface PositionsFormProps {
  onSubmit?: (values: z.infer<typeof formSchema>) => void
}

const PositionsForm = React.forwardRef<
  { submit: () => Promise<void> },
  PositionsFormProps
>(function PositionsForm({ onSubmit }: PositionsFormProps, ref) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token0: getContractAddress("DebugTokenA"),
      token1: getContractAddress("DebugTokenB"),
      index: 0,
      amount0Desired: "1000000000000000000",
      amount1Desired: "1000000000000000000",
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

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="token0"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token 0</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="token1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token 1</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="index"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Index</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    const value =
                      e.target.value === "" ? 0 : parseFloat(e.target.value)
                    field.onChange(isNaN(value) ? 0 : value)
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount0Desired"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount0 Desired</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Amount1 Desired</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
})

export default PositionsForm
