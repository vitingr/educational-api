import { FastifyInstance } from "fastify";
import { getFinishedDailyPlansPlanController } from "./get-finished-daily-plans";
import { finishDailyPlanController } from "./finish-daily-plan";

export const finishedDailyPlansRoutes = async (app: FastifyInstance) => {
  getFinishedDailyPlansPlanController.register(app)
  finishDailyPlanController.register(app)
}
