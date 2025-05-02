import { WeeklyPlansRepository } from '@/modules/activity/repositories/interfaces/weekly-plans-repository'
import {
  CreateWeeklyPlanUseCasePayload,
  CreateWeeklyPlanUseCaseReturn
} from './types'

export class CreateWeeklyPlanUseCase {
  constructor(private weeklyPlansRepository: WeeklyPlansRepository) {}

  execute = async (
    payload: CreateWeeklyPlanUseCasePayload
  ): Promise<CreateWeeklyPlanUseCaseReturn> => {
    const weeklyPlan = await this.weeklyPlansRepository.createWeeklyPlan(payload)

    return {
      weeklyPlan
    }
  }
}
