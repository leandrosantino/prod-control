import { PrismaClient } from '../database/client'
import AutoDetectDecoderStream from 'autodetect-decoder-stream'
import CsvReadableStream from 'csv-reader'
import fs from 'fs'
import path from 'path'
import { z } from 'zod'

const prisma = new PrismaClient();

const productSchema = z.object({
  description: z.string(),
  partNumber: z.number().or(z.string()).transform(val => String(val)),
  sapCode: z.number().or(z.string()).transform(val => String(val)),
  projectNumber: z.number().or(z.string()).transform(val => String(val)),
  amount: z.number()
})

type Product = z.input<typeof productSchema>


function csvRead<T>() {
  return new Promise<T[]>((resolve, reject) => {
    const data: T[] = []
    fs.createReadStream(path.join(__dirname, '../docs/Parts.csv'))
      .pipe(new AutoDetectDecoderStream({ defaultEncoding: '1255' }))
      .pipe(new CsvReadableStream({
        parseNumbers: true,
        parseBooleans: true,
        trim: true,
        asObject: true,
        delimiter: ';'
      }))
      .on('data', function (row: T) {
        data.push(row)
      }).on('end', function () {
        resolve(data)
      });
  })
}

(async () => {
  try {

    const products = z.array(productSchema).parse(await csvRead<Product>())

    for await (let product of products) {
      try {
        await prisma.product.create({
          data: product
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
