import { FastifyInstance } from "fastify";
import { getDailyStudyPlanByIdController } from "./get-study-plan-by-id";
import { getDailyStudyPlansController } from "./get-study-plans";
import { createDailyStudyPlanController } from "./create-study-plan";
import { deleteDailyStudyPlanController } from "./delete-study-plan";

export const dailyStudyPlansRoutes = async (app: FastifyInstance) => {
  getDailyStudyPlanByIdController.register(app)
  getDailyStudyPlansController.register(app)
  createDailyStudyPlanController.register(app)
  deleteDailyStudyPlanController.register(app)
}
