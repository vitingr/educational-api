import z from "zod";

export const getFinishedDailyPlansParamsSchema = z.object({
  weeklyPlanId: z.string().uuid()
})
