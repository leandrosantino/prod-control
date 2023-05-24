import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../services/prisma'
import { productFiltersSchema, productSchema } from '../utils/schemas'



export async function productsRoutes(server: FastifyInstance) {

  server.get('/api/products', async (request, reply) => {
    try {

      let where = {}
      try {
        const filters = productFiltersSchema.parse(request.query)
        where = {
          description: {
            contains: filters.description
          },
          technicalDescription: {
            contains: filters.technicalDescription
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

}
