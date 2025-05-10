import { FinishedDailyPlansRepository } from '@/modules/activity/repositories/interfaces/finished-daily-plans-repository'
import { prisma } from '@/shared/infra/database/prisma/client'
import { DailyStudyPlanDoesNotExistError } from '@/shared/infra/http/exceptions/daily-study-plans'

export class FinishDailyPlanUseCase {
  constructor(
    private finishedDailyPlansRepository: FinishedDailyPlansRepository
  ) {}

  execute = async (planId: string): Promise<null> => {
    const dailyPlan = await prisma.dailyStudyPlan.findFirst({
      where: {
        id: planId
      }
    })

    if (!dailyPlan) {
      throw new DailyStudyPlanDoesNotExistError()
    }

    await this.finishedDailyPlansRepository.finishDailyStudyPlan(planId)

    return null
  }
}
