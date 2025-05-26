import { FastifyInstance } from "fastify"
import { getWeeklyPlanByIdController } from "./get-weekly-plan-by-id"
import { getWeeklyPlansController } from "./get-weekly-plans"
import { createWeeklyPlanController } from "./create-weekly-plan"
import { deleteWeeklyPlanController } from "./delete-weekly-plan"
import { getActiveWeeklyPlansController } from "./get-active-weekly-plans"

export const weeklyPlansRoutes = async (app: FastifyInstance) => {
  getWeeklyPlanByIdController.register(app)
  getWeeklyPlansController.register(app)
  createWeeklyPlanController.register(app)
  deleteWeeklyPlanController.register(app)
  getActiveWeeklyPlansController.register(app)
}
