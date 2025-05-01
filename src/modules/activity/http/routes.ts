import { FastifyInstance } from "fastify";
import { dailyStudyPlansRoutes } from "./daily-study-plans/routes";

export const activitiesRoutes = (app: FastifyInstance) => {
  app.register(dailyStudyPlansRoutes)
}
