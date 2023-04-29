import { z } from 'zod'


export const idListSchema = z.array(z.string())


export const productSchema = z.object({
  id: z.string(),
  description: z.string(),
  partNumber: z.string(),
  sapCode: z.string(),
  projectNumber: z.string(),
  amount: z.number()
})

export type Product = z.infer<typeof productSchema>
