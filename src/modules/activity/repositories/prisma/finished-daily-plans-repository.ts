import { prisma } from '@/shared/infra/database/prisma/client'
import { FinishedDailyPlansRepository } from '../interfaces/finished-daily-plans-repository'
import { DailyStudyPlanDoesNotExistError } from '@/shared/infra/http/exceptions/daily-study-plans'

export class PrismaFinishedDailyPlansRepository
  implements FinishedDailyPlansRepository
{
  finishDailyStudyPlan = async (planId: string) => {
    const dailyStudyPlan = await prisma.dailyStudyPlan.update({
      where: {
        id: planId
      },
      data: {
        isCompleted: true
      }
    })

    if (!dailyStudyPlan) {
      throw new DailyStudyPlanDoesNotExistError()
    }

    const weeklyPlanId = dailyStudyPlan.weeklyPlanId

    const allDailyPlans = await prisma.dailyStudyPlan.findMany({
      where: { weeklyPlanId: weeklyPlanId }
    })

    const allCompleted = allDailyPlans.every(plan => plan.isCompleted)

    if (allCompleted) {
      await prisma.weeklyStudyPlan.update({
        where: {
          id: weeklyPlanId!
        },
        data: {
          isCompleted: true
        }
      })
    }

    return null
  }

  getFinishedDailyStudyPlans = async (planId: string) => {
    const finishedDailyStudyPlans = await prisma.dailyStudyPlan.findMany({
      where: {
        weeklyPlanId: planId,
        isCompleted: true
      }
    })

    return finishedDailyStudyPlans
  }
}
