import { PrismaClient } from '../../database/client'
const prisma = new PrismaClient();

import AutoDetectDecoderStream from 'autodetect-decoder-stream'
import CsvReadableStream from 'csv-reader'
import fs from 'fs'
import path from 'path'
import { z } from 'zod';


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
    fs.createReadStream(path.join(__dirname, './Pasta1.csv'))
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
  const data = z.array(productSchema).parse(await csvRead<Product>())
  for await (let item of data) {
    const prod = await prisma.product.create({
      data: item
    })
    console.log(prod)
  }
})()


