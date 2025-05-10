import { prisma } from "@/shared/infra/database/prisma/client";
import { FinishedDailyPlansRepository } from "../interfaces/finished-daily-plans-repository";

export class PrismaFinishedDailyPlansRepository implements FinishedDailyPlansRepository {
  finishDailyStudyPlan = async (planId: string) => {
    await prisma.dailyStudyPlan.update({
      where: {
        id: planId
      },
      data: {
        isCompleted: true
      }
    })

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
