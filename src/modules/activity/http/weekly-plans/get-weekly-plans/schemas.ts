import z from 'zod'

export const getWeeklyPlansParamsSchema = z.object({
  userId: z.string().uuid()
})
