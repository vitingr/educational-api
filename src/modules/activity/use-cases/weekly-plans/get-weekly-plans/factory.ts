import { PrismaWeeklyPlansRepository } from "@/modules/activity/repositories/prisma/weekly-plans-repository"
import { GetWeeklyPlansUseCase } from "."

export const getWeeklyPlansFactory = () => {
  const getWeeklyPlansRepository = new PrismaWeeklyPlansRepository()

  const useCase = new GetWeeklyPlansUseCase(getWeeklyPlansRepository)

  return useCase
}
