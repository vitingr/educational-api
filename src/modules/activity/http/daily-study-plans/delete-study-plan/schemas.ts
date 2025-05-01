import z from "zod";

export const deleteDailyStudyPlanParamsSchema = z.object({
  id: z.string().uuid()
})
