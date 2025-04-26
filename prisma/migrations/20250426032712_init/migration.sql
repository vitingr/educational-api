-- CreateTable
CREATE TABLE "generated_study_plans" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "generated_study_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saved_plans" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,

    CONSTRAINT "saved_plans_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "saved_plans_userId_planId_key" ON "saved_plans"("userId", "planId");

-- AddForeignKey
ALTER TABLE "generated_study_plans" ADD CONSTRAINT "generated_study_plans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_plans" ADD CONSTRAINT "saved_plans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_plans" ADD CONSTRAINT "saved_plans_planId_fkey" FOREIGN KEY ("planId") REFERENCES "generated_study_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
