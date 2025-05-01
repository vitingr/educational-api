/*
  Warnings:

  - You are about to drop the `generated_study_plans` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "generated_study_plans" DROP CONSTRAINT "generated_study_plans_userId_fkey";

-- DropForeignKey
ALTER TABLE "saved_plans" DROP CONSTRAINT "saved_plans_planId_fkey";

-- DropTable
DROP TABLE "generated_study_plans";

-- CreateTable
CREATE TABLE "daily_study_plans" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "daily_study_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekly_study_plans" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "weekly_study_plans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "daily_study_plans" ADD CONSTRAINT "daily_study_plans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_study_plans" ADD CONSTRAINT "weekly_study_plans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_plans" ADD CONSTRAINT "saved_plans_planId_fkey" FOREIGN KEY ("planId") REFERENCES "weekly_study_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
