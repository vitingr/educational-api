import z from "zod";

export const removePlanFromFavouritesParamsSchema = z.object({
  id: z.string().uuid()
})
