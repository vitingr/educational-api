import { DailyStudyPlansRepository } from '@/modules/activity/repositories/interfaces/study-plans-repository'
import { DailyStudyPlanDoesNotExistError } from '@/shared/infra/http/exceptions/daily-study-plans'
import { DailyStudyPlan } from '@prisma/client'

export class GetDailyStudyPlans {
  constructor(private dailyStudyPlansRepository: DailyStudyPlansRepository) {}

  execute = async (weeklyPlanId: string): Promise<DailyStudyPlan[] | null> => {
    const dailyStudyPlans =
      await this.dailyStudyPlansRepository.getDailyStudyPlans(weeklyPlanId)

    if (!dailyStudyPlans?.length) {
      throw new DailyStudyPlanDoesNotExistError()
    }

    return dailyStudyPlans
  }
}
