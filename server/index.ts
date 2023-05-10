import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyView from '@fastify/view'
import ejs from 'ejs'
import cors from '@fastify/cors'
import fs from 'fs'
import { createId as cuid } from '@paralleldrive/cuid2'
import path from 'path'
import { z } from 'zod'

import { PrismaClient } from '../database/client'

import { createObjectCsvWriter } from 'csv-writer'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${path.join(__dirname, '../database/dev.db')}`
    }
  }
});

async function csvWriter() {

  try {

    const data = await prisma.productionRecord.findMany({
      include: {
        product: true
      }
    })

    const records = data.map((record) => {
      return {
        id: record.id,
        data: new Date(record.createdAt).toLocaleDateString(),
        time: new Date(record.createdAt).toLocaleTimeString(),
        description: record.product.description,
        partNumber: record.product.partNumber,
        sapCode: record.product.sapCode,
        projectNumber: record.product.projectNumber,
        amount: record.product.amount
      }
    })

    console.log(records)

    const csvWriter = createObjectCsvWriter({
      path: path.join(__dirname, '../report.csv'),
      header: [
        { id: 'id', title: 'Identificação da Etiqueta' },
        { id: 'data', title: 'Data' },
        { id: 'time', title: 'Hora' },
        { id: 'description', title: 'Descrição do Porduto' },
        { id: 'partNumber', title: 'Part Number' },
        { id: 'sapCode', title: 'Código Sap' },
        { id: 'projectNumber', title: 'Projeto' },
        { id: 'amount', title: 'Quant.' },
      ],
      fieldDelimiter: ';',
      encoding: 'utf8'
    });

    await csvWriter.writeRecords(records)

  } catch (error) {
    throw error
  }
}



const server = fastify();

let address: string

server.register(cors, {
  origin: '*',
})

server.register(fastifyStatic, {
  root: path.join(__dirname, '../build')
})

server.register(fastifyView, {
  engine: { ejs },
  // root: path.join(__dirname, '../public/views')
  root: path.join(__dirname, './views')
})

server.get('/', async (request, reply) => {
  try {
    return reply.sendFile('index.html')
  } catch (error) {
    console.log(error)
  }
})

server.get('/tags/getids/:amount', async (request, reply) => {
  try {
    const pramsSchema = z.object({
      amount: z.string().transform((value => Number(value)))
    })
    const { amount } = pramsSchema.parse(request.params)
    const cuidList: string[] = []
    for (let i = 1; i <= amount; i++) {//
      cuidList.push(cuid())
    }
    return cuidList
  } catch (error) {
    throw error
  }
})

server.get('/products', async (request, reply) => {
  try {
    return await prisma.product.findMany()
  } catch (error) {
    throw error
  }
})

server.get('/gethost', async () => {
  try {
    return address
  } catch (error) {
    throw error
  }
})

server.get('/reg', async (request, reply) => {
  try {
    const { item, tag } = z.object({
      item: z.string(),
      tag: z.string()
    }).parse(request.query)

    const product = await prisma.product.findUnique({
      where: { id: item }
    })

    if (product?.id) {
      try {
        await prisma.productionRecord.create({
          data: {
            id: tag,
            productId: product?.id
          }
        })
        return { success: true, msg: 'Registrado com Sucesso!' }
      } catch {
        return { success: false, msg: 'Esta etiqueta Já foi Registrada!' }
      }
    }

    return { success: false, msg: 'Este produdo ainda não foi cadastrado!' }
  } catch (error) {
    console.log(error)
    throw error
  }
})


server.get('/report', async (request, reply) => {
  try {
    return reply.view('report.ejs', { msg: '' })
  } catch (error) {
    throw error
  }
})

server.get('/report/generate', async (request, reply) => {
  try {
    await csvWriter()
    return { msg: `Relatorio gerado com sucesso! - ${new Date().toLocaleString()}` }
  } catch (error) {
    return { msg: `Erro ao gerar relatório! - ${new Date().toLocaleString()}` }
  }
})

server.get('/product/:id', async (request, reply) => {
  try {

    const { id } = z.object({
      id: z.string()
    }).parse(request.params)

    const product = await prisma.product.findUnique({
      where: { id }
    })

    if (product) {
      return reply.send(product)
    }

    return reply.status(400).send({
      error: true,
      msg: 'Produto não encontrado!'
    })

  } catch (error) {
    console.log(error)
    throw error
  }
})

server.post('/products/edit', async (request, reply) => {
  try {
    const product = z.object({
      id: z.string(),
      data: z.object({
        description: z.string(),
        partNumber: z.string(),
        sapCode: z.string(),
        projectNumber: z.string(),
        amount: z.number(),
      })
    }).parse(request.body)


    await prisma.product.update({
      where: {
        id: product.id
      },
      data: product.data
    })

    return reply.status(200).send({
      error: false,
      msg: 'Produto atualizado com sucesso!'
    })

  } catch (error) {
    console.log(error)
    return reply.send({
      error: true,
      msg: 'Falha ao ao atualizar produto'
    })
  }
})

server.post('/products/create', async (request, reply) => {
  try {
    const product = z.object({
      description: z.string(),
      partNumber: z.string(),
      sapCode: z.string(),
      projectNumber: z.string(),
      amount: z.number(),
    }).parse(request.body)


    await prisma.product.create({
      data: product
    })

    return reply.status(200).send({
      error: false,
      msg: 'Produto cadastrado com sucesso!'
    })

  } catch (error) {
    console.log(error)
    return reply.send({
      error: true,
      msg: 'Falha ao ao cadastrar produto'
    })
  }
})

server.listen({ port: 3333, host: '0.0.0.0' }, () => {

  try {
    // const filePath = path.join(__dirname, '../public/address.txt')
    const filePath = path.join(__dirname, './address.txt')
    address = fs.readFileSync(filePath, 'utf8');
    console.log(address)
  } catch {
    console.log('Erro in read address')
  }

  console.log('server started!')
})
