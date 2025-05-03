import z from "zod";

export const addPlanFromFavouritesBodySchema = z.object({
  planId: z.string().uuid(),
  userId: z.string().uuid()
})
