import z from 'zod'

export const getUserByEmailParamsSchema = z.object({
  email: z.string().email()
})
