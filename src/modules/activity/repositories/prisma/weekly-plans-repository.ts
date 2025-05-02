import { Prisma } from "@prisma/client";
import { prisma } from "@/shared/infra/database/prisma/client";
import { WeeklyPlansRepository } from "../interfaces/weekly-plans-repository";

export class PrismaWeeklyPlansRepository implements WeeklyPlansRepository {
  createWeeklyPlan = async (payload: Prisma.WeeklyStudyPlanUncheckedCreateInput) => {
    const weeklyStudyPlan = await prisma.weeklyStudyPlan.create({
      data: payload
    })

    return weeklyStudyPlan
  }

  deleteWeeklyPlan = async (id: string) => {
    await prisma.weeklyStudyPlan.delete({
      where: {
        id
      }
    })

    return null
  }

  getWeeklyPlanById = async (id: string) => {
    const weeklyStudyPlan = await prisma.weeklyStudyPlan.findFirst({
      where: {
        id
      }
    })

    return weeklyStudyPlan
  }

  getWeeklyPlans = async (userId: string) => {
    const weeklyStudyPlans = await prisma.weeklyStudyPlan.findMany({
      where: {
        userId,
        isCompleted: false
      }
    })

    return weeklyStudyPlans
  }
}
