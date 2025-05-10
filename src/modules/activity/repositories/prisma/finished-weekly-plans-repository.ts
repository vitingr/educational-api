import { prisma } from "@/shared/infra/database/prisma/client";
import { FinishedWeeklyPlansRepository } from "../interfaces/finished-weekly-plans-repository";
import { WeeklyStudyPlan } from "@prisma/client";

export class PrismaFinishedWeeklyPlansRepository implements FinishedWeeklyPlansRepository {
  finishWeeklyStudyPlan = async (planId: string) => {
    await prisma.weeklyStudyPlan.update({
      where: {
        id: planId
      },
      data: {
        isCompleted: true
      }
    })

    return null
  }

  getFinishedWeeklyStudyPlans = async (userId: string) => {
    const finishedWeeklyStudyPlans = await prisma.weeklyStudyPlan.findMany({
      where: {
        id: userId,
        isCompleted: true
      }
    })

    return finishedWeeklyStudyPlans
  }
}
