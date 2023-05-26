import { FastifyInstance } from 'fastify'
import config from '../config.json'
import { z } from 'zod'
import { prisma } from '../services/prisma'
import { createId } from '@paralleldrive/cuid2'


export async function tagRoutes(server: FastifyInstance) {

  server.get('/api/tags/getids/:amount', async (request, reply) => {
    try {
      const pramsSchema = z.object({
        amount: z.string().transform((value => Number(value)))
      })
      const { amount } = pramsSchema.parse(request.params)
      const cuidList: string[] = []
      for (let i = 1; i <= amount; i++) {//
        cuidList.push(createId())
      }
      return cuidList
    } catch (error) {
      throw error
    }
  })

  server.get('/api/reg', async (request, reply) => {
    if (config.enable_qrcode_scan) {
      try {
        const { item, tag, amount } = z.object({
          item: z.string(),
          tag: z.string(),
          amount: z.string().transform(val => Number(val)),
        }).parse(request.query)

        const product = await prisma.product.findUnique({
          where: { id: item }
        })

        if (product?.id) {
          try {
            await prisma.productionRecord.create({
              data: {
                id: tag,
                productId: product?.id,
                amount
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


}
