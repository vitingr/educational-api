/*
  Warnings:

  - You are about to drop the column `endTime` on the `daily_study_plans` table. All the data in the column will be lost.
  - Added the required column `title` to the `weekly_study_plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "daily_study_plans" DROP COLUMN "endTime",
ALTER COLUMN "isCompleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "weekly_study_plans" ADD COLUMN     "title" TEXT NOT NULL;
