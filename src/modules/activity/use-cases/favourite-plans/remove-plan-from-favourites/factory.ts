import { PrismaFavouritePlansRepository } from "@/modules/activity/repositories/prisma/favourite-plans-repository"
import { RemovePlanFromFavouritesUseCase } from "."

export const removePlanFromFavouritesFactory = () => {
  const favouritePlansRepository = new PrismaFavouritePlansRepository()

  const useCase = new RemovePlanFromFavouritesUseCase(favouritePlansRepository)

  return useCase
}
