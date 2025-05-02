import z from "zod";

export const deleteWeeklyPlanParamsSchema = z.object({
  id: z.string().uuid()
})
