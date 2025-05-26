import { WeeklyStudyPlan } from '@prisma/client'

export interface FinishedWeeklyPlansRepository {
  finishWeeklyStudyPlan: (planId: string) => Promise<null>
  getFinishedWeeklyStudyPlans: (
    userId: string
  ) => Promise<WeeklyStudyPlan[] | null>
}
