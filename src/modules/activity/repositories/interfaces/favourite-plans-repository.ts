import { FavouritePlan, Prisma } from "@prisma/client";

export type GetFavouritePlansReturn = Prisma.FavouritePlanGetPayload<{
  include: {
    WeeklyStudyPlans: true,
    user: true
  }
}>

export interface FavouritePlansRepository {
  addPlanToFavourites: (favouritePlan: Prisma.FavouritePlanUncheckedCreateInput) => Promise<FavouritePlan>
  removePlanFrom: (id: string) => Promise<null>
  getFavouritePlans: (userId: string) => Promise<FavouritePlan[] | null>
  getFavouritePlanById: (id: string) => Promise<FavouritePlan | null>
}
