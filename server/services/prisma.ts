import { PrismaClient } from '@prisma/client'
import path from 'path'
import { isDev } from '../config.json'

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${path.join(__dirname, isDev ? '../../database/dev.db' : '../database/dev.db')}`
    }
  }
})
