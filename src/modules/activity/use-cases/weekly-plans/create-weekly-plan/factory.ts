import { PrismaWeeklyPlansRepository } from "@/modules/activity/repositories/prisma/weekly-plans-repository"
import { CreateWeeklyPlanUseCase } from "."

export const createWeeklyStudyPlanFactory = () => {
  const weeklyPlansRepository = new PrismaWeeklyPlansRepository()

  const useCase = new CreateWeeklyPlanUseCase(weeklyPlansRepository)

  return useCase
}
