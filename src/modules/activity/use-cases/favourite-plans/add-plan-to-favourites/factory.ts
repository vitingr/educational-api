import { PrismaFavouritePlansRepository } from '@/modules/activity/repositories/prisma/favourite-plans-repository'
import { AddPlanToFavouritesUseCase } from '.'

export const addPlanToFavouritesFactory = () => {
  const favouritePlansRepository = new PrismaFavouritePlansRepository()

  const useCase = new AddPlanToFavouritesUseCase(favouritePlansRepository)

  return useCase
}
