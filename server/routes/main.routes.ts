import { FastifyInstance } from 'fastify'


export async function mainRoutes(server: FastifyInstance) {

  server.get('/', (request, reply) => {
    reply.sendFile('index.html')
  })

  server.setNotFoundHandler((request, reply) => {
    reply.sendFile('index.html')
  })


}
