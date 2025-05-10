import z from "zod";

export const finishDailyPlanBodySchema = z.object({
  planId: z.string().uuid()
})
