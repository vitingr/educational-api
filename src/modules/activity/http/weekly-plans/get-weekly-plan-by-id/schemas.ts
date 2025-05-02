import z from 'zod'

export const getWeeklyPlanByIdParamsSchema = z.object({
  id: z.string().uuid()
})
