import { PrismaFinishedWeeklyPlansRepository } from "@/modules/activity/repositories/prisma/finished-weekly-plans-repository"
import { GetFinishedWeeklyPlansUseCase } from "."

export const getFinishedWeeklyPlansFactory = () => {
  const finishedWeeklyPlansRepository = new PrismaFinishedWeeklyPlansRepository()

  const useCase = new GetFinishedWeeklyPlansUseCase(finishedWeeklyPlansRepository)

  return useCase
}
