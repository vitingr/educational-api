import z from 'zod'

export const getDailyStudyPlanByIdParamsSchema = z.object({
  id: z.string().uuid()
})
