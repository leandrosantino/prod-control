import { z } from 'zod'


export const idListSchema = z.array(z.string())


export const productCreateSchema = z.object({
  description: z.string(),
  partNumber: z.number().or(z.string()).transform(val => String(val)),
  sapCode: z.number().or(z.string()).transform(val => String(val)),
  projectNumber: z.number().or(z.string()).transform(val => String(val)),
  amount: z.number(),
  technicalDescription: z.string(),
  ute: z.string(),
  classification: z.string(),
})

export const productSchema = z.object({
  id: z.string(),
  ...productCreateSchema.shape
})

export type Product = z.infer<typeof productSchema>
