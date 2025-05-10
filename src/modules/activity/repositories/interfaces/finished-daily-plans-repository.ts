import { DailyStudyPlan } from "@prisma/client"

export interface FinishedDailyPlansRepository {
  finishDailyStudyPlan: (planId: string) => Promise<null>
  getFinishedDailyStudyPlans: (weeklyPlanId: string) => Promise<DailyStudyPlan[] | null>
}
