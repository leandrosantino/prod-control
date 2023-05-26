import fastifyStatic from '@fastify/static'
import { FastifyInstance } from 'fastify'
import path from 'path'


export async function mainRoutes(server: FastifyInstance) {

  await server.register(fastifyStatic, {
    root: path.join(__dirname, '../build')
  })

  server.get('/', (request, reply) => {
    reply.sendFile('index.html')
  })

  server.setNotFoundHandler((request, reply) => {
    reply.sendFile('index.html')
  })


}
