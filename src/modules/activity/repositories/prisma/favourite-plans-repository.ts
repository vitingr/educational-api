import { Prisma, FavouritePlan, WeeklyStudyPlan } from "@prisma/client";
import { FavouritePlansRepository } from "../interfaces/favourite-plans-repository";
import { prisma } from "@/shared/infra/database/prisma/client";

export class PrismaFavouritePlansRepository implements FavouritePlansRepository {
  addPlanToFavourites = async (payload: Prisma.FavouritePlanUncheckedCreateInput) => {
    const favouritePlan = await prisma.favouritePlan.create({
      data: payload
    })

    return favouritePlan
  }

  getFavouritePlans = async (userId: string) => {
    const favouritePlans = await prisma.favouritePlan.findMany({
      where: {
        userId
      }
    })

    return favouritePlans
  }

  removePlanFrom = async (id: string) => {
    await prisma.favouritePlan.delete({
      where: {
        id
      }
    })

    return null
  }

  getFavouritePlanById = async (id: string) => {
    const favouritePlan = await prisma.favouritePlan.findFirst({
      where: {
        id
      }
    })

    return favouritePlan
  }
}
