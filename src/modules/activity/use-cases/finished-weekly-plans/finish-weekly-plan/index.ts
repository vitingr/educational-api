import { FinishedWeeklyPlansRepository } from '@/modules/activity/repositories/interfaces/finished-weekly-plans-repository'
import { prisma } from '@/shared/infra/database/prisma/client'
import { WeeklyPlanDoesNotExistError } from '@/shared/infra/http/exceptions/weekly-plan'

export class FinishWeeklyPlanUseCase {
  constructor(
    private finishedWeeklyPlansRepository: FinishedWeeklyPlansRepository
  ) {}

  execute = async (planId: string): Promise<null> => {
    const weeklyPlan = await prisma.weeklyStudyPlan.findFirst({
      where: {
        id: planId
      }
    })

    if (!weeklyPlan) {
      throw new WeeklyPlanDoesNotExistError()
    }

    await this.finishedWeeklyPlansRepository.finishWeeklyStudyPlan(planId)

    return null
  }
}
