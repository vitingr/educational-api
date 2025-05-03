import { FavouritePlansRepository } from '@/modules/activity/repositories/interfaces/favourite-plans-repository'
import { FavouritePlanDoesNotExistError } from '@/shared/infra/http/exceptions/favourite-plans'

export class RemovePlanFromFavouritesUseCase {
  constructor(private favouritePlansRepository: FavouritePlansRepository) {}

  execute = async (id: string): Promise<null> => {
    const favouritePlan =
      await this.favouritePlansRepository.getFavouritePlanById(id)

    if (!favouritePlan) {
      throw new FavouritePlanDoesNotExistError()
    }

    await this.favouritePlansRepository.removePlanFrom(id)

    return null
  }
}
