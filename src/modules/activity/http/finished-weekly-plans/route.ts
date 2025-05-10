import { FastifyInstance } from "fastify";
import { getFinishedWeeklyPlansPlanController } from "./get-finished-weekly-plans";
import { finishWeeklyPlanController } from "./finish-weekly-plan";

export const finishedWeeklyPlansRoutes = async (app: FastifyInstance) => {
  getFinishedWeeklyPlansPlanController.register(app)
  finishWeeklyPlanController.register(app)
}
