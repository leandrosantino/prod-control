import { z } from 'zod'


export const idListSchema = z.array(z.string())

export const productFiltersSchema = z.object({
  description: z.string(),
  technicalDescription: z.string(),
  ute: z.string(),
  classification: z.string(),
})

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


export const productionRecordSchema = z.object({
  id: z.string(),
  createdAt: z.date().or(z.string()),
  amount: z.number(),
  productId: z.string(),
  product: productSchema
})


export type ProductionRecord = z.infer<typeof productionRecordSchema>


export const qrCodeInfoSchema = z.object({
  productId: z.string(),
  tagId: z.string(),
  amount: z.number().optional(),
})


export type QrCodeInfo = z.infer<typeof qrCodeInfoSchema>
