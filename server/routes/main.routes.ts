import fastifyStatic from '@fastify/static'
import { FastifyInstance } from 'fastify'
import path from 'path'
import { isDev } from '../config.json'


export async function mainRoutes(server: FastifyInstance) {

  const staticPath = path.join(__dirname, isDev ? '../../build' : '../build')
  console.log(staticPath)

  await server.register(fastifyStatic, {
    root: staticPath
  })

  server.get('/', (request, reply) => {
    reply.sendFile('index.html')
  })

  server.setNotFoundHandler((request, reply) => {
    reply.sendFile('index.html')
  })


}
