import { PrismaDailyStudyPlansRepository } from "@/modules/activity/repositories/prisma/study-plans-repository"
import { CreateDailyStudyPlanUseCase } from "."

export const createDailyStudyPlanFactory = () => {
  const dailyStudyPlansRepository = new PrismaDailyStudyPlansRepository()

  const useCase = new CreateDailyStudyPlanUseCase(dailyStudyPlansRepository)
  
  return useCase
}
