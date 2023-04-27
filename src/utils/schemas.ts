import { z } from 'zod'

export const respositorySchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  owner: z.object({
    login: z.string(),
    avatar_url: z.string()
  }),
  description: z.string().optional().nullable()
})

export type Repository = z.infer<typeof respositorySchema>

export const issueSchema = z.object({
  id: z.number(),
  title: z.string(),
  user: z.object({
    login: z.string(),
    avatar_url: z.string()
  }),
  html_url: z.string(),
  labels: z.array(z.object({
    id: z.number(),
    name: z.string()
  })).optional()
})

export type Issue = z.infer<typeof issueSchema>

