import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import cors from '@fastify/cors'
import { createId as cuid } from '@paralleldrive/cuid2'
import path from 'path'
import { z } from 'zod'

const server = fastify();

server.register(cors, {
  origin: '*',
})

server.register(fastifyStatic, {
  root: path.join(__dirname, '../build')
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

    const products = [
      {
        id: cuid(),
        description: 'CONJUNTO CINTA E FECHADURA 226',
        partNumber: '520567640',
        sapCode: '2230212003.01',
        projectNumber: 226,
        amount: 16
      },
      {
        id: cuid(),
        description: 'ISOLAMENTO DO PARALAMA ESQ 521',
        partNumber: '519547723',
        sapCode: '2230403002.01',
        projectNumber: 521,
        amount: 16
      },
    ]

    return products

  } catch (error) {
    throw error
  }
})

server.listen({ port: 3333 }, () => {
  console.log('server started!')
})
