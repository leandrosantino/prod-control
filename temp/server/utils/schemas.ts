import { z } from "zod";
import { dateRejex, dateStringToObj } from "./dateTools";


export const productFiltersSchema = z.object({
  description: z.string(),
  technicalDescription: z.string(),
  ute: z.string(),
  classification: z.string(),
})


export const getRecordsInputSchema = z.object({
  ...productFiltersSchema.shape,
  date: z.string(),
  id: z.string(),
  cursor: z.string(),
  page: z.string().transform(val => Number(val)),
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

export type Product = z.input<typeof productSchema>

export const reportInfoToGenerateSchema = z.object({
  from: z.string().regex(dateRejex).transform(val => {
    return dateStringToObj(val)
  }),
  to: z.string().regex(dateRejex).transform(val => {
    return dateStringToObj(val)
  })
})

export const productionRecordSchema = z.object({
  id: z.string(),
  createdAt: z.date().or(z.string()),
  amount: z.number(),
  productId: z.string(),
  product: productSchema
})

export type ProductionRecordType = z.infer<typeof productionRecordSchema>
