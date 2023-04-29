import { PrismaClient } from '@prisma/client'
import path from 'path';

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${path.join(__dirname, '../build/database/dev.db')}`
      // url: `file:${path.join(__dirname, './database/dev.db')}`
    }
  }
});
