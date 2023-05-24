import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../services/prisma'
import { getRecordsInputSchema } from '../utils/schemas'


export async function recordsRoutes(server: FastifyInstance) {

  server.delete('/api/productionRecord', async (request, reply) => {
    try {

      const { id } = z.object({
        id: z.string()
      }).parse(request.query)

      await prisma.productionRecord.delete({
        where: { id }
      })

      reply.status(200).send({
        error: false,
        msg: 'O registro excuido da base de dados '
      })

    } catch (error) {
      console.log(error)
      reply.status(500).send({
        error: true,
        msg: 'Erro interno do servidor'
      })
    }
  })



  server.get('/api/productionRecord', async (request, reply) => {
    try {

      const filters = getRecordsInputSchema.parse(request.query)

      let createdAt = {}

      if (/\d{4}-\d{2}-\d{2}/.test(filters.date)) {
        const { day, month, year } = (() => {
          const date = filters.date.split('-').map(entry => Number(entry))
          return { day: date[2], month: date[1], year: date[0] }
        })();

        createdAt = {
          gte: new Date(year, month - 1, day, 0, 0, 0).toISOString(),
          lte: new Date(year, month - 1, day, 23, 59, 59).toISOString(),
        }
      }

      const { cursor, page } = filters

      const record = await prisma.productionRecord.findMany({
        skip: page === 1 ? 0 : 1,
        take: 15,
        ...page === 1 ? {} : { cursor: { id: cursor } },
        where: {
          product: {
            description: {
              contains: filters.description
            },
            technicalDescription: {
              contains: filters.technicalDescription
            },
            ...filters.classification === '' ? {} : { classification: filters.classification },
            ...filters.ute === '' ? {} : { ute: filters.ute },
          },
          createdAt,
        },
        orderBy: {
          createdAt: 'desc'
        },
        include: {
          product: true,
        }
      })

      return record

    } catch (error) {
      console.log(error)
      reply.status(500).send({
        error: true,
        msg: 'Erro interno do servidor'
      })
    }
  })


}
