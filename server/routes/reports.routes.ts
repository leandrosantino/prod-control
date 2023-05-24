import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { createWorksheetBuffer, csvWriter } from '../utils/excelController'
import { productionRecordSchema, reportInfoToGenerateSchema } from '../utils/schemas'
import { prisma } from '../services/prisma'


export async function reportsRoutes(server: FastifyInstance) {

  server.get('/api/report', async (request, reply) => {
    try {
      const {
        from, to
      } = reportInfoToGenerateSchema.parse(request.query)

      const reports = await prisma.productionRecord.findMany({
        where: {
          createdAt: {
            gte: new Date(from.year, from.month - 1, from.day, 0, 0, 0).toISOString(),
            lte: new Date(to.year, to.month - 1, to.day, 23, 59, 59).toISOString(),
          }
        },
        include: {
          product: true
        }
      })


      const worksheet = createWorksheetBuffer(z.array(productionRecordSchema).parse(reports))

      return reply.send(worksheet).type('application/xls').code(200)

      // return { msg: `Relatorio gerado com sucesso!` }
    } catch (error) {
      console.log(error)
      return reply.code(500).send({ msg: `Erro ao gerar relatório!`, error: true })
    }
  })

}
