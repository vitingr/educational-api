import z from 'zod'

export const createWeeklyPlanBodySchema = z.object({
  userId: z.string(),
  title: z.string()
})
