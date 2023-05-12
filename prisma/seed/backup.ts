import { PrismaClient } from '../../database/client'
import xlsx from 'node-xlsx'

const prisma = new PrismaClient();

(async () => {

  const record = await prisma.productionRecord.findMany({
    include: {
      product: true
    }
  })

  const record_data: any[] = []

  record_data.push(Object.keys(record))

  record.forEach(entry => {
    record_data.push([
      entry.id
    ])
  })

})()

async function getProducts() {
  const products = await prisma.product.findMany()

  const data: any[] = []

  data.push(Object.keys(products[0]))

  products.forEach(product => {
    data.push()
  })


}
