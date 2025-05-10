import { PrismaFinishedWeeklyPlansRepository } from "@/modules/activity/repositories/prisma/finished-weekly-plans-repository"
import { FinishWeeklyPlanUseCase } from "."

export const finishWeeklyPlanFactory = () => {
  const finishedWeeklyPlansRepository = new PrismaFinishedWeeklyPlansRepository()

  const useCase = new FinishWeeklyPlanUseCase(finishedWeeklyPlansRepository)

  return useCase
}
