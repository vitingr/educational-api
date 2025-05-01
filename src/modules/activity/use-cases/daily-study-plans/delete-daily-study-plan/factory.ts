import { PrismaDailyStudyPlansRepository } from "@/modules/activity/repositories/prisma/study-plans-repository"
import { DeleteDailyStudyPlanUseCase } from "."

export const deleteDailyStudyPlanFactory = () => {
  const dailyStudyPlansRepository = new PrismaDailyStudyPlansRepository()

  const useCase = new DeleteDailyStudyPlanUseCase(dailyStudyPlansRepository)

  return useCase
}
