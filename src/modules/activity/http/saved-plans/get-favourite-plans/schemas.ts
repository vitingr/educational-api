import z from "zod";

export const getFavouritePlansParamsSchema = z.object({
  userId: z.string().uuid()
})
