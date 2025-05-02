import { WeeklyPlansRepository } from "@/modules/activity/repositories/interfaces/weekly-plans-repository";
import { WeeklyPlanDoesNotExistError } from "@/shared/infra/http/exceptions/weekly-plan";

export class DeleteWeeklyPlanUseCase {
  constructor(
    private weeklyPlansRepository: WeeklyPlansRepository
  ) {}

  execute = async (id: string): Promise<null> => {
    const weeklyPlan = await this.weeklyPlansRepository.getWeeklyPlanById(id)

    if (!weeklyPlan) {
      throw new WeeklyPlanDoesNotExistError()
    }

    await this.weeklyPlansRepository.deleteWeeklyPlan(id)

    return null
  }
}
