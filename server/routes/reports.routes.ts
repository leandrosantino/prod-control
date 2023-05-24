import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { csvWriter } from '../utils/excelController'


export async function reportsRoutes(server: FastifyInstance) {

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

}
