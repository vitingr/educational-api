import z from 'zod'

export const getDailyStudyPlansParamsSchema = z.object({
  weeklyPlanId: z.string().uuid()
})
