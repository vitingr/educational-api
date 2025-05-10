import { FinishedDailyPlansRepository } from '@/modules/activity/repositories/interfaces/finished-daily-plans-repository'
import { DailyStudyPlanDoesNotExistError } from '@/shared/infra/http/exceptions/daily-study-plans'
import { DailyStudyPlan } from '@prisma/client'

export class GetFinishedDailyPlansUseCase {
  constructor(
    private finishedDailyPlansRepository: FinishedDailyPlansRepository
  ) {}

  execute = async (userId: string): Promise<DailyStudyPlan[] | null> => {
    const finishedDailyPlans =
      await this.finishedDailyPlansRepository.getFinishedDailyStudyPlans(userId)

    if (!finishedDailyPlans?.length) {
      throw new DailyStudyPlanDoesNotExistError()
    }

    return finishedDailyPlans
  }
}
