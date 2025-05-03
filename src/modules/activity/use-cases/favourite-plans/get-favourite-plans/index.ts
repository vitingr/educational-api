import { FavouritePlansRepository } from '@/modules/activity/repositories/interfaces/favourite-plans-repository'
import { FavouritePlanDoesNotExistError } from '@/shared/infra/http/exceptions/favourite-plans'
import { FavouritePlan } from '@prisma/client'

export class GetFavouritePlansUseCase {
  constructor(private favouritePlansRepository: FavouritePlansRepository) {}

  execute = async (userId: string): Promise<FavouritePlan[] | null> => {
    const favouritePlans =
      await this.favouritePlansRepository.getFavouritePlans(userId)

    if (!favouritePlans?.length) {
      throw new FavouritePlanDoesNotExistError()
    }

    return favouritePlans
  }
}
