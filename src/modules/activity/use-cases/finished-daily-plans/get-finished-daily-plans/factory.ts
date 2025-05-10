import { PrismaFinishedDailyPlansRepository } from "@/modules/activity/repositories/prisma/finished-daily-plans-repository"
import { GetFinishedDailyPlansUseCase } from "."

export const getFinishedDailyPlansFactory = () => {
  const finishedDailyPlansRepository = new PrismaFinishedDailyPlansRepository()

  const useCase = new GetFinishedDailyPlansUseCase(finishedDailyPlansRepository)

  return useCase
}
