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

const formSchema = z.object({
  token0: z.string().min(10).max(50),
  token1: z.string().min(10).max(50),
  fee: z.number().min(0),
  tickLower: z.number(),
  tickUpper: z.number(),
  price: z.number().min(0.000001).max(1000000),
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
                  onChange={(val) => field.onChange(Number(val))}
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
                  onChange={(val) => field.onChange(Number(val))}
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
                  onChange={(val) => field.onChange(Number(val))}
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
