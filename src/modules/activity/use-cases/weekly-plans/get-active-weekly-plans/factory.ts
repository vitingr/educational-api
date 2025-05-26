import { PrismaWeeklyPlansRepository } from "@/modules/activity/repositories/prisma/weekly-plans-repository"
import { GetActiveWeeklyPlansUseCase } from "."

export const getActiveWeeklyPlansFactory = () => {
  const getWeeklyPlansRepository = new PrismaWeeklyPlansRepository()

  const useCase = new GetActiveWeeklyPlansUseCase(getWeeklyPlansRepository)

  return useCase
}
