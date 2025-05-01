import { PrismaDailyStudyPlansRepository } from '@/modules/activity/repositories/prisma/study-plans-repository'
import { GetDailyStudyPlans } from '.'

export const getDailyStudyPlansFactory = () => {
  const dailyStudyPlansRepository = new PrismaDailyStudyPlansRepository()

  const useCase = new GetDailyStudyPlans(dailyStudyPlansRepository)

  return useCase
}
