import z from "zod";

export const getFinishedWeeklyPlansParamsSchema = z.object({
  weeklyPlanId: z.string().uuid()
})
