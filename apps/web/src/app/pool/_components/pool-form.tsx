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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

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
    fee: z.number().refine((val) => [3000, 500, 10000].includes(val), {
      message: "请选择有效费率等级",
    }),
    tickLower: z
      .number()
      .int("必须为整数")
      .min(-887272, "不能小于最小tick值")
      .max(887272, "不能超过最大tick值"),
    tickUpper: z
      .number()
      .int("必须为整数")
      .min(-887272, "不能小于最小tick值")
      .max(887272, "不能超过最大tick值"),
    price: z
      .number()
      .min(0.000001, "价格不能低于0.000001")
      .max(1000000, "价格不能超过1000000")
      .multipleOf(0.000001, "最多支持6位小数"),
  })
  .refine((data) => data.token0.toLowerCase() < data.token1.toLowerCase(), {
    message: "Token0地址必须按字母顺序排在Token1之前，请交换代币位置",
    path: ["token1"],
  })

export type PoolFormType = z.infer<typeof formSchema>

interface PoolFormProps {
  onSubmit?: (values: z.infer<typeof formSchema>) => void
}

const PoolForm = React.forwardRef<
  { submit: () => Promise<void> },
  PoolFormProps
>(function PoolForm({ onSubmit }: PoolFormProps, ref) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token0: getContractAddress("DebugTokenA"),
      token1: getContractAddress("DebugTokenB"),
      fee: 3000,
      tickLower: -887272,
      tickUpper: 887272,
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
          name="fee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fee</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(val) => field.onChange(Number(val))}
                  defaultValue={String(field.value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"3000"}>0.3%</SelectItem>
                    <SelectItem value={"500"}>0.05%</SelectItem>
                    <SelectItem value={"10000"}>1%</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tickLower"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tick Lower</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    // 使用 parseFloat 转换并处理空值情况
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
          name="tickUpper"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tick Upper</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    // 使用 parseFloat 转换并处理空值情况
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
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Init Price(token1/token0)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    // 使用 parseFloat 转换并处理空值情况
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
      </form>
    </Form>
  )
})

export default PoolForm
