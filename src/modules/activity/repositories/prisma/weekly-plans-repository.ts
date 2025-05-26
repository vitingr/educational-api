import { Prisma } from '@prisma/client'
import { prisma } from '@/shared/infra/database/prisma/client'
import { WeeklyPlansRepository } from '../interfaces/weekly-plans-repository'

export class PrismaWeeklyPlansRepository implements WeeklyPlansRepository {
  createWeeklyPlan = async (
    payload: Prisma.WeeklyStudyPlanUncheckedCreateInput
  ) => {
    const weeklyStudyPlan = await prisma.weeklyStudyPlan.create({
      data: payload
    })

    return weeklyStudyPlan
  }

  deleteWeeklyPlan = async (id: string) => {
    await prisma.weeklyStudyPlan.delete({
      where: {
        id
      }
    })

    return null
  }

  getWeeklyPlanById = async (id: string) => {
    const weeklyStudyPlan = await prisma.weeklyStudyPlan.findFirst({
      where: {
        id
      }
    })

    if (!weeklyStudyPlan) {
      return null
    }

    const dailyStudyPlans = await prisma.dailyStudyPlan.findMany({
      where: {
        weeklyPlanId: id
      }
    })

    const total = dailyStudyPlans.length
    const completed = dailyStudyPlans.filter(plan => plan.isCompleted).length
    const completionPercentage = total > 0 ? (completed / total) * 100 : 0

    return {
      ...weeklyStudyPlan,
      completionPercentage
    }
  }

  getWeeklyPlans = async (userId: string) => {
    const weeklyStudyPlans = await prisma.weeklyStudyPlan.findMany({
      where: {
        userId
      }
    })

    const favouritePlans = await prisma.favouritePlan.findMany({
      where: {
        userId
      }
    })
    const favouritePlanIds = new Set(favouritePlans.map(fav => fav.planId))

    const plansWithCompletion = await Promise.all(
      weeklyStudyPlans.map(async weeklyPlan => {
        const dailyStudyPlans = await prisma.dailyStudyPlan.findMany({
          where: {
            weeklyPlanId: weeklyPlan.id
          }
        })

        const total = dailyStudyPlans.length
        const completed = dailyStudyPlans.filter(
          plan => plan.isCompleted
        ).length

        const completionPercentage = total > 0 ? (completed / total) * 100 : 0

        return {
          ...weeklyPlan,
          completionPercentage,
          isFavourite: favouritePlanIds.has(weeklyPlan.id)
        }
      })
    )

    return plansWithCompletion
  }

  getActiveWeeklyPlans = async (userId: string) => {
    const weeklyStudyPlans = await prisma.weeklyStudyPlan.findMany({
      where: {
        userId,
        isCompleted: false
      }
    })

    const favouritePlans = await prisma.favouritePlan.findMany({
      where: {
        userId
      }
    })
    const favouritePlanIds = new Set(favouritePlans.map(fav => fav.planId))

    const plansWithCompletion = await Promise.all(
      weeklyStudyPlans.map(async weeklyPlan => {
        const dailyStudyPlans = await prisma.dailyStudyPlan.findMany({
          where: {
            weeklyPlanId: weeklyPlan.id
          }
        })

        const total = dailyStudyPlans.length
        const completed = dailyStudyPlans.filter(
          plan => plan.isCompleted
        ).length

        const completionPercentage = total > 0 ? (completed / total) * 100 : 0

        return {
          ...weeklyPlan,
          completionPercentage,
          isFavourite: favouritePlanIds.has(weeklyPlan.id)
        }
      })
    )

    return plansWithCompletion
  }
}
