import { PrismaWeeklyPlansRepository } from "@/modules/activity/repositories/prisma/weekly-plans-repository"
import { DeleteWeeklyPlanUseCase } from "."


export const deleteWeeklyPlanFactory = () => {
  const deleteWeeklyPlanRepository = new PrismaWeeklyPlansRepository()

  const useCase = new DeleteWeeklyPlanUseCase(deleteWeeklyPlanRepository)

  return useCase
}
