import { DailyStudyPlansRepository } from '@/modules/activity/repositories/interfaces/study-plans-repository'
import {
  CreateDailyStudyPlanUseCasePayload,
  CreateDailyStudyPlanUseCaseReturn
} from './types'

export class CreateDailyStudyPlanUseCase {
  constructor(private dailyStudyPlansRepository: DailyStudyPlansRepository) {}

  execute = async (
    payload: CreateDailyStudyPlanUseCasePayload
  ): Promise<CreateDailyStudyPlanUseCaseReturn> => {
    const dailyStudyPlan =
      await this.dailyStudyPlansRepository.createDailyStudyPlan(payload)

    return {
      dailyStudyPlan
    }
  }
}
