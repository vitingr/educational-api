import { DailyStudyPlansRepository } from "@/modules/activity/repositories/interfaces/study-plans-repository";
import { DailyStudyPlanDoesNotExistError } from "@/shared/infra/http/exceptions/daily-study-plans";

export class DeleteDailyStudyPlanUseCase {
  constructor(
    private dailyStudyPlansRepository: DailyStudyPlansRepository
  ) {}

  execute = async (id: string): Promise<null> => {
    const dailyStudyPlan = await this.dailyStudyPlansRepository.getDailyStudyPlanById(
      id
    )

    if (!dailyStudyPlan) {
      throw new DailyStudyPlanDoesNotExistError()
    }

    await this.dailyStudyPlansRepository.deleteDailyStudyPlan(id)

    return null
  }
}
