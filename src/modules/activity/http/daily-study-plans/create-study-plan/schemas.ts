import z from 'zod'

export const createDailyStudyPlanBodySchema = z.object({
  userId: z.string(),
  content: z.string()
})

