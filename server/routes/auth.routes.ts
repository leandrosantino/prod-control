import { FastifyInstance } from 'fastify'
import config from '../config.json'
import { z } from 'zod'

export async function authRoutes(server: FastifyInstance) {

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

}
