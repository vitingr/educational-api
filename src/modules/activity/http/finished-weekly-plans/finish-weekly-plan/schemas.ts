import z from "zod";

export const finishWeeklyPlanBodySchema = z.object({
  planId: z.string().uuid()
})
