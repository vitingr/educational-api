-- AlterTable
ALTER TABLE "daily_study_plans" ADD COLUMN     "weeklyPlanId" TEXT;

-- AddForeignKey
ALTER TABLE "daily_study_plans" ADD CONSTRAINT "daily_study_plans_weeklyPlanId_fkey" FOREIGN KEY ("weeklyPlanId") REFERENCES "weekly_study_plans"("id") ON DELETE SET NULL ON UPDATE CASCADE;
