import { DailyStudyPlansRepository } from '@/modules/activity/repositories/interfaces/study-plans-repository'
import { DailyStudyPlanDoesNotExistError } from '@/shared/infra/http/exceptions/daily-study-plans'
import { DailyStudyPlan } from '@prisma/client'

export class GetDailyStudyPlanById {
  constructor(private dailyStudyPlansRepository: DailyStudyPlansRepository) {}

  execute = async (id: string): Promise<DailyStudyPlan | null> => {
    const dailyStudyPlans =
      await this.dailyStudyPlansRepository.getDailyStudyPlanById(id)

    if (!dailyStudyPlans) {
      throw new DailyStudyPlanDoesNotExistError()
    }

    return dailyStudyPlans
  }
}
