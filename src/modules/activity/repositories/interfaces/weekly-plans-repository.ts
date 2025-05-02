import { WeeklyStudyPlan, Prisma } from "@prisma/client";

export type GetWeeklyPlansReturn = Prisma.WeeklyStudyPlanGetPayload<{
  include: {
    user: true
  }
}>

export interface WeeklyPlansRepository {
  createWeeklyPlan: (weeklyStudyPlan: Prisma.WeeklyStudyPlanUncheckedCreateInput) => Promise<WeeklyStudyPlan>
  deleteWeeklyPlan: (id: string) => Promise<null>
  getWeeklyPlanById: (id: string) => Promise<WeeklyStudyPlan | null>
  getWeeklyPlans: (weeklyPlanId: string) => Promise<WeeklyStudyPlan[] | null>
}


