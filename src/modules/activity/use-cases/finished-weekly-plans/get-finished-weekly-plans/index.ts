import { FinishedWeeklyPlansRepository } from '@/modules/activity/repositories/interfaces/finished-weekly-plans-repository'
import { WeeklyPlanDoesNotExistError } from '@/shared/infra/http/exceptions/weekly-plan'
import { WeeklyStudyPlan } from '@prisma/client'

export class GetFinishedWeeklyPlansUseCase {
  constructor(
    private finishedWeeklyPlansRepository: FinishedWeeklyPlansRepository
  ) {}

  execute = async (userId: string): Promise<WeeklyStudyPlan[] | null> => {
    const finishedWeeklyPlans =
      await this.finishedWeeklyPlansRepository.getFinishedWeeklyStudyPlans(
        userId
      )

    if (!finishedWeeklyPlans?.length) {
      throw new WeeklyPlanDoesNotExistError()
    }

    return finishedWeeklyPlans
  }
}
