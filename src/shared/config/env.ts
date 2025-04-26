import 'dotenv/config'
import { z } from 'zod'

const schema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(8000),
  JWT_SECRET: z.string(),
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  DEBUG: z.string()
})

const parsed = schema.safeParse(process.env)

if (!parsed.success) {
  console.error('Invalid Environment Variables', parsed.error.format())

  throw new Error('Invalid Environment Variables.')
}

export const env = {
  ...parsed.data,
  IS_DEVELOP_MODE: parsed.data.NODE_ENV === 'dev'
}
