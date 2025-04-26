import z from 'zod'

export const updateUserParamsSchema = z.object({
  id: z.string().uuid()
})

export const updateUserBodySchema = z.object({
  email: z.string().email().optional()
})
