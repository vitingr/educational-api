import { PrismaFinishedDailyPlansRepository } from "@/modules/activity/repositories/prisma/finished-daily-plans-repository"
import { FinishDailyPlanUseCase } from "."

export const finishDailyPlanFactory = () => {
  const finishedDailyPlansRepository = new PrismaFinishedDailyPlansRepository()

  const useCase = new FinishDailyPlanUseCase(finishedDailyPlansRepository)

  return useCase
}
