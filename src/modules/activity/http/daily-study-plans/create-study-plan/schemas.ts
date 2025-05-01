import z from 'zod'

export const createDailyStudyPlanBodySchema = z.object({
  userId: z.string(),
  startTime: z.date(),
  content: z.string()
})

