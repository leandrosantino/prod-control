import fastify from 'fastify'
import cors from '@fastify/cors'
import config from './config.json'

import { productsRoutes } from './routes/products.routes'
import { recordsRoutes } from './routes/records.routes'
import { reportsRoutes } from './routes/reports.routes'
import { tagRoutes } from './routes/tags.routes'
import { authRoutes } from './routes/auth.routes'
import { mainRoutes } from './routes/main.routes'

async function bootstrap() {

  const server = fastify();

  await server.register(cors, { origin: '*', })

  await server.register(mainRoutes)
  await server.register(productsRoutes)
  await server.register(tagRoutes)
  await server.register(recordsRoutes)
  await server.register(reportsRoutes)
  await server.register(authRoutes)

  console.log(config)

  server.listen({ port: config.port, host: '0.0.0.0' }, () => {
    console.log('server started!')
  })
}

bootstrap()
