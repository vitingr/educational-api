import { WeeklyStudyPlan, Prisma } from "@prisma/client";

export interface CreateWeeklyPlanUseCasePayload
  extends Prisma.WeeklyStudyPlanUncheckedCreateInput {}

export interface CreateWeeklyPlanUseCaseReturn {
  weeklyPlan: WeeklyStudyPlan
}
