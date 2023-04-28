import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

(async () => {
  try {

    await prisma.product.create({
      data: {
        description: 'CONJUNTO CINTA E FECHADURA 226',
        partNumber: '520567640',
        sapCode: '2230212003.01',
        projectNumber: 226,
        amount: 16
      },
    })

    await prisma.product.create({
      data: {
        description: 'ISOLAMENTO DO PARALAMA ESQ 521',
        partNumber: '519547723',
        sapCode: '2230403002.01',
        projectNumber: 521,
        amount: 16
      },
    })

  } catch (error) {
    console.log(error)
  }
})()
