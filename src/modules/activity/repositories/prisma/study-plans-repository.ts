import { DailyStudyPlan, Prisma } from '@prisma/client'
import { DailyStudyPlansRepository } from '../interfaces/study-plans-repository'
import { prisma } from '@/shared/infra/database/prisma/client'

export class PrismaDailyStudyPlansRepository
  implements DailyStudyPlansRepository
{
  createDailyStudyPlan = async (
    payload: Prisma.DailyStudyPlanUncheckedCreateInput
  ) => {
    const dailyStudyPlan = await prisma.dailyStudyPlan.create({
      data: payload
    })

    return dailyStudyPlan
  }

  deleteDailyStudyPlan = async (id: string) => {
    await prisma.dailyStudyPlan.delete({
      where: {
        id
      }
    })

    return null
  }

  getDailyStudyPlanById = async (id: string) => {
    const dailyStudyPlan = await prisma.dailyStudyPlan.findFirst({
      where: {
        id
      }
    })

    return dailyStudyPlan
  }

  getDailyStudyPlans = async (weeklyPlanId: string) => {
    const dailyStudyPlans = await prisma.dailyStudyPlan.findMany({
      where: {
        weeklyPlanId
      }
    })

    return dailyStudyPlans
  }
}
