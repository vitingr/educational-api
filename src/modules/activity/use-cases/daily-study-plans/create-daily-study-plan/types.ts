import { DailyStudyPlan, Prisma } from "@prisma/client";

export interface CreateDailyStudyPlanUseCasePayload
  extends Prisma.DailyStudyPlanUncheckedCreateInput {}

export interface CreateDailyStudyPlanUseCaseReturn {
  dailyStudyPlan: DailyStudyPlan
}
