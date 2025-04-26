import z from 'zod'

export const validateCodeBodySchema = z.object({
  email: z.string().email(),
  code: z.string()
})
