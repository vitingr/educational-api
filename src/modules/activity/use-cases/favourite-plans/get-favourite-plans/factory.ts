import { PrismaFavouritePlansRepository } from "@/modules/activity/repositories/prisma/favourite-plans-repository"
import { GetFavouritePlansUseCase } from "."

export const getFavouritePlansFactory = () => {
  const favouritePlansRepository = new PrismaFavouritePlansRepository()

  const useCase = new GetFavouritePlansUseCase(favouritePlansRepository)

  return useCase
}
