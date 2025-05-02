import { WeeklyPlansRepository } from '@/modules/activity/repositories/interfaces/weekly-plans-repository'
import { WeeklyPlanDoesNotExistError } from '@/shared/infra/http/exceptions/weekly-plan'
import { WeeklyStudyPlan } from '@prisma/client'

export class GetWeeklyPlansUseCase {
  constructor(
    private weeklyPlansRepository: WeeklyPlansRepository
  ) {}

  execute = async (userId: string): Promise<WeeklyStudyPlan[]> => {
    const weeklyPlans = await this.weeklyPlansRepository.getWeeklyPlans(userId)

    if (!weeklyPlans) {
      throw new WeeklyPlanDoesNotExistError()
    }

    return weeklyPlans
  }
}
