import { FavouritePlansRepository } from '@/modules/activity/repositories/interfaces/favourite-plans-repository'
import {
  AddPlanToFavouritesUseCasePayload,
  AddPlanToFavouritesUseCaseReturn
} from './types'

export class AddPlanToFavouritesUseCase {
  constructor(private favouritePlansRepository: FavouritePlansRepository) {}

  execute = async (
    payload: AddPlanToFavouritesUseCasePayload
  ): Promise<AddPlanToFavouritesUseCaseReturn> => {
    const favouritePlan =
      await this.favouritePlansRepository.addPlanToFavourites(payload)

    return {
      favouritePlan
    }
  }
}
