import { PrismaWeeklyPlansRepository } from "@/modules/activity/repositories/prisma/weekly-plans-repository"
import { GetWeeklyPlanByIdUseCase } from "."

export const getWeeklyPlanByIdFactory = () => {
  const getWeeklyPlanByIdRepository = new PrismaWeeklyPlansRepository()

  const useCase = new GetWeeklyPlanByIdUseCase(getWeeklyPlanByIdRepository)

  return useCase
}
