import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyView from '@fastify/view'
import ejs from 'ejs'
import cors from '@fastify/cors'
import fs from 'fs'
import { createId as cuid } from '@paralleldrive/cuid2'
import path from 'path'
import { z } from 'zod'
import { prisma } from './pirsma'
import { csvWriter } from './csvWriter'


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
  root: path.join(__dirname, '../public/views')
  //root: path.join(__dirname, './views')
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
        return reply.view('info.ejs', {
          id: tag,
          product,
          success: true,
          msg: 'Registrado com Sucesso!'
        })
      } catch {
        return reply.view('info.ejs', {
          id: tag,
          product,
          success: false,
          msg: 'Esta etiqueta já foi registrada!'
        })
      }
    }

    return reply.view('info.ejs', {
      id: tag,
      product,
      success: false,
      msg: 'Id do produto inválido!'
    })

  } catch (error) {
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

server.listen({ port: 3333, host: '0.0.0.0' }, () => {

  try {
    const filePath = path.join(__dirname, '../public/address.txt')
    // const filePath = path.join(__dirname, './address.txt')
    address = fs.readFileSync(filePath, 'utf8');
    console.log(address)
  } catch {
    console.log('Erro in read address')
  }

  console.log('server started!')
})
