import fastify, { errorCodes } from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyView from '@fastify/view'
import ejs from 'ejs'
import cors from '@fastify/cors'
import { createId as cuid } from '@paralleldrive/cuid2'
import path from 'path'
import { z } from 'zod'
import config from './config.json'

import { PrismaClient } from '../database/client'

import { createObjectCsvWriter } from 'csv-writer'
import console from 'console'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${path.join(__dirname, '../database/dev.db')}`
    }
  }
});

function getTurno(now: Date) {
  let turno = '0'

  const y = now.getFullYear()
  const m = now.getMonth()
  const d = now.getDate()

  const h1 = new Date(y, m, d, 6, 10, 0)
  const h2 = new Date(y, m, d, 15, 48, 0)
  const h3 = new Date(y, m, d, 23, 59, 0)
  const h4 = new Date(y, m, d, 0, 0, 0)
  const h5 = new Date(y, m, d, 1, 9, 0)

  if (now >= h1 && now < h2) { turno = '1' }
  if (now >= h2 && now < h3) { turno = '2' }
  if (now >= h4 && now < h5) { turno = '2' }
  if (now >= h5 && now < h1) { turno = '3' }

  return turno
}

async function csvWriter(day: number, month: number, year: number) {

  try {

    let data = await prisma.productionRecord.findMany({
      where: {
        createdAt: {
          gte: new Date(year, month - 1, day, 0, 0, 0).toISOString(),
          lte: new Date(year, month - 1, day, 23, 59, 59).toISOString(),
        }
      },
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
        technicalDescription: record.product.technicalDescription,
        classification: record.product.classification,
        partNumber: record.product.partNumber,
        sapCode: record.product.sapCode,
        projectNumber: record.product.projectNumber,
        amount: record.product.amount,
        turno: getTurno(new Date(record.createdAt)),
      }
    })


    const fileDate = new Date(year, month - 1, day)
      .toLocaleDateString()
      .replace('/', '-')
      .replace('/', '-')

    const local = path.join(config.report_path, `Relatório de Produção -${fileDate}.csv`)

    const csvWriter = createObjectCsvWriter({
      path: path.resolve(local),
      header: [
        { id: 'id', title: 'Identificação da Etiqueta' },
        { id: 'data', title: 'Data' },
        { id: 'time', title: 'Hora' },
        { id: 'technicalDescription', title: 'Descricao do Porduto' },
        { id: 'description', title: 'Descricao do Operacional' },
        { id: 'classification', title: 'CLassificacao' },
        { id: 'partNumber', title: 'Part Number' },
        { id: 'sapCode', title: 'Codigo Sap' },
        { id: 'projectNumber', title: 'Projeto' },
        { id: 'amount', title: 'Quant.' },
        { id: 'turno', title: 'Turno' },
      ],
      fieldDelimiter: ';',
      encoding: 'utf8'
    });

    await csvWriter.writeRecords(records)

  } catch (error) {
    console.log(error)
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
  root: config.isDev ? path.join(__dirname, '../public/views') : path.join(__dirname, './views')
})

server.get('/', async (request, reply) => {
  try {
    return reply.sendFile('index.html')
  } catch (error) {
    console.log(error)
  }
})

server.get('/api/tags/getids/:amount', async (request, reply) => {
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

const productFiltersSchema = z.object({
  description: z.string(),
  technicalDescription: z.string(),
  ute: z.string(),
  classification: z.string(),
})

server.get('/api/products', async (request, reply) => {
  try {

    let where = {}
    try {
      const filters = productFiltersSchema.parse(request.query)
      where = {
        description: {
          contains: filters.description
        },
        ...filters.classification === '' ? {} : { classification: filters.classification },
        ...filters.ute === '' ? {} : { ute: filters.ute },
      }
    } catch { }

    const products = await prisma.product.findMany({
      where,
      orderBy: {
        ute: 'asc'
      }
    })

    return products

  } catch (error) {
    console.log(error)
    throw error
  }
})

server.get('/api/gethost', async () => {
  try {
    return address
  } catch (error) {
    throw error
  }
})

server.get('/reg', async (request, reply) => {
  if (config.enable_qrcode_scan) {
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
          return { success: false, msg: 'Esta etiqueta Já foi registrada!' }
        }
      }

      return { success: false, msg: 'Este produdo ainda não foi cadastrado!' }
    } catch (error) {
      console.log(error)
      throw error
    }
  } else {
    return { success: false, msg: 'Sistema em manutenção, por favor, aguarde!' }
  }
})


server.get('/api/report', async (request, reply) => {
  try {
    return reply.view('report.ejs', { msg: '' })
  } catch (error) {
    throw error
  }
})

server.get('/api/report/generate', async (request, reply) => {
  try {

    const { day, month, year } = z.object({
      day: z.string().transform(val => Number(val)),
      month: z.string().transform(val => Number(val)),
      year: z.string().transform(val => Number(val))
    }).parse(request.query)

    await csvWriter(day, month, year)
    return { msg: `Relatorio do dia ${new Date(year, month - 1, day).toLocaleDateString()} gerado com sucesso!` }
  } catch (error) {
    console.log(error)
    return { msg: `Erro ao gerar relatório!` }
  }
})

server.get('/api/product/:id', async (request, reply) => {
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

server.post('/api/products/edit', async (request, reply) => {
  try {
    const product = z.object({
      id: z.string(),
      data: productSchema
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

server.post('/api/products/create', async (request, reply) => {
  try {
    const product = productSchema.parse(request.body)

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

server.get('/api/auth', async (request, reply) => {
  try {

    const requestParsed = z.object({
      password: z.string()
    }).parse(request.query)

    if (requestParsed.password === config.admin_pass) {
      return reply.send({
        isAuth: true,
        error: false,
        msg: 'senha válida'
      }).status(500)
    }

    return reply.send({
      isAuth: false,
      error: false,
      msg: 'senha válida'
    }).status(500)

  } catch (error) {
    return reply.send({
      error: true,
      msg: 'Falha interna do servidor'
    }).status(500)

  }
})

server.setNotFoundHandler((request, reply) => {
  reply.sendFile('index.html')
})

console.log(config)

server.listen({ port: config.port, host: '0.0.0.0' }, () => {
  console.log('server started!')
})
