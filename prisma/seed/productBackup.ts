import { PrismaClient } from "@prisma/client";
import xlsx from 'node-xlsx';
import path from "path";
import fs from 'fs'

const prisma = new PrismaClient();

export async function productBackup() {

  const products = await prisma.product.findMany()

  const data = [[
    'id',
    'description',
    'partNumber',
    'sapCode',
    'projectNumber',
    'amount',
    'technicalDescription',
    'ute',
    'classification',
  ]
  ]
  const local = path.join(__dirname, `products.xlsx`)

  products.forEach(product => {
    data.push(Object.keys(product).map(key => {
      return product[key]
    }))
  })

  const buffer = xlsx.build([{ name: 'products', data, options: {} }])

  fs.writeFileSync(local, buffer)


}
