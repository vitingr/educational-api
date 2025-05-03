import { FavouritePlan, Prisma } from '@prisma/client'

export interface AddPlanToFavouritesUseCasePayload
  extends Prisma.FavouritePlanUncheckedCreateInput {}

export interface AddPlanToFavouritesUseCaseReturn {
  favouritePlan: FavouritePlan
}
