import { PrismaClient } from '../database/client'
import data from './data.json'
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

  for await (let item of data as any) {

    const produto: Product = {
      description: item[0],
      amount: item[1],
      partNumber: item[3],
      projectNumber: item[2],
      sapCode: item[4]
    }

    const products = await prisma.product.findFirst({
      where: {
        description: { contains: produto.description.split(' - ')[0] }
      },
    })

    if (products?.description) {
      try {
        await prisma.product.update({
          where: {
            id: products.id
          },
          data: {
            amount: produto.amount,
            description: produto.description,
            partNumber: String(produto.partNumber),
            projectNumber: String(produto.projectNumber),
            sapCode: String(produto.sapCode),
          }
        })
        console.log(" # Update - " + produto.description + ` (${produto.amount})`)
        console.log(" # Update - " + products?.description + ` (${products.amount}) \n`)
      } catch {
        console.log('** Erro ao atualizar' + products?.description + `\n`)
      }
    } else {
      console.log(" - Not Found - " + produto.description)

      try {
        await prisma.product.create({
          data:{
            amount: produto.amount,
            description: produto.description,
            partNumber: String(produto.partNumber),
            projectNumber: String(produto.projectNumber),
            sapCode: String(produto.sapCode),
          }
        })
        console.log(" - Cadastrado - " + produto.description + '\n')
      } catch {
        console.log(" ** Erro ao cadastrar - " + produto.description + `\n`)
      }

    }

  }

  // const dados = z.array(productSchema).parse(await csvRead<Product>())

  // for await (let item of dados) {
  //   const prod = await prisma.product.create({
  //     data: item
  //   })

  //   console.log(prod)

  // }

})();


