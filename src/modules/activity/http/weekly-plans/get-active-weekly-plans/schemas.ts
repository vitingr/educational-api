import z from 'zod'

export const getActiveWeeklyPlansParamsSchema = z.object({
  userId: z.string().uuid()
})
