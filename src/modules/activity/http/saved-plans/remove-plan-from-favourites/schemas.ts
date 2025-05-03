import z from "zod";

export const removePlanFromFavouritesBodySchema = z.object({
  id: z.string().uuid()
})
