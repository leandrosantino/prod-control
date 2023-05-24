import { z } from "zod";


export const productFiltersSchema = z.object({
  description: z.string(),
  technicalDescription: z.string(),
  ute: z.string(),
  classification: z.string(),
})


export const getRecordsInputSchema = z.object({
  ...productFiltersSchema.shape,
  date: z.string(),
  cursor: z.string(),
  page: z.string().transform(val => Number(val)),
})

export const productSchema = z.object({
  description: z.string(),
  partNumber: z.number().or(z.string()).transform(val => String(val)),
  sapCode: z.number().or(z.string()).transform(val => String(val)),
  projectNumber: z.number().or(z.string()).transform(val => String(val)),
  amount: z.number(),
  technicalDescription: z.string(),
  ute: z.string(),
  classification: z.string(),
})

export type Product = z.input<typeof productSchema>
