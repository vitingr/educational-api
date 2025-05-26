import { DailyStudyPlan, Prisma } from '@prisma/client'

export type GetDailyStudyPlansReturn = Prisma.DailyStudyPlanGetPayload<{
  include: {
    user: true
  }
}>

export interface DailyStudyPlansRepository {
  createDailyStudyPlan: (
    dailyStudyPlan: Prisma.DailyStudyPlanUncheckedCreateInput
  ) => Promise<DailyStudyPlan>
  deleteDailyStudyPlan: (id: string) => Promise<null>
  getDailyStudyPlanById: (id: string) => Promise<DailyStudyPlan | null>
  getDailyStudyPlans: (weeklyPlanId: string) => Promise<DailyStudyPlan[] | null>
}
