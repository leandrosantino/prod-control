import { PrismaClient } from '@prisma/client'
import xlsx from 'node-xlsx'
import fs from 'fs'
import path from 'path'
import { z } from 'zod'
import { createId as cuid } from '@paralleldrive/cuid2'

const prisma = new PrismaClient();

const productSchema = z.object({
  description: z.string(),
  partNumber: z.number().or(z.string()).transform(val => String(val)),
  sapCode: z.number().or(z.string()).transform(val => String(val)),
  projectNumber: z.number().or(z.string()).transform(val => String(val)),
  amount: z.number(),
  technicalDescription: z.string(),
  ute: z.string(),
  classification: z.string(),
})

type Product = z.input<typeof productSchema>


(async () => {
  try {

    const workSheets = xlsx.parse(path.join(__dirname, './dados.xls'));

    const dados: Product[] = []

    workSheets[0].data.forEach((entry, index) => {
      if (index > 0) {
        dados.push({
          description: String(entry[0]),
          technicalDescription: String(entry[1]),
          ute: `UTE-${entry[5]}`,
          classification: String(entry[4]),
          partNumber: String(entry[6]),
          sapCode: String(entry[7]),
          projectNumber: String(entry[3]),
          amount: entry[8],
        })
      }
    })


    const products = z.array(productSchema).parse(dados)

    console.log(products)

    for await (let product of products) {
      try {
        const prod = await prisma.product.create({
          data: product
        })

        await prisma.productionRecord.create({
          data: {
            amount: prod.amount,
            id: cuid(),
            createdAt: new Date(),
            productId: prod.id
          }
        })

        console.log(`Success => ${product.description}`)
      } catch (error) {
        console.log(`Error => ${product.description} -- ${error}`)
      }
    }

  } catch (error) {
    console.log(error)
  }
})()
