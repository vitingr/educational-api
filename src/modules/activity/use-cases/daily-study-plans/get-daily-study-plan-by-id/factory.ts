import { PrismaDailyStudyPlansRepository } from '@/modules/activity/repositories/prisma/study-plans-repository'
import { GetDailyStudyPlanById } from '.'

export const getDailyStudyPlanByIdFactory = () => {
  const dailyStudyPlansRepository = new PrismaDailyStudyPlansRepository()

  const useCase = new GetDailyStudyPlanById(dailyStudyPlansRepository)

  return useCase
}
