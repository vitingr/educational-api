import { WeeklyPlansRepository } from '@/modules/activity/repositories/interfaces/weekly-plans-repository'
import { WeeklyPlanDoesNotExistError } from '@/shared/infra/http/exceptions/weekly-plan'
import { WeeklyStudyPlan } from '@prisma/client'

export class GetWeeklyPlanByIdUseCase {
  constructor(
    private weeklyPlansRepository: WeeklyPlansRepository
  ) {}

  execute = async (id: string): Promise<WeeklyStudyPlan> => {
    const weeklyPlan = await this.weeklyPlansRepository.getWeeklyPlanById(id)

    if (!weeklyPlan) {
      throw new WeeklyPlanDoesNotExistError()
    }

    return weeklyPlan
  }
}
