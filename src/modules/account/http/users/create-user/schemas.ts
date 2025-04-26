import z from 'zod'

export const createUserBodySchema = z.object({
  id: z.string().optional(),
  email: z.string().email()
})
