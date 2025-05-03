import { FastifyInstance } from "fastify";
import { dailyStudyPlansRoutes } from "./daily-study-plans/routes";
import { weeklyPlansRoutes } from "./weekly-plans/route";
import { favouritePlansRoutes } from "./favourite-plans/route";

export const activitiesRoutes = (app: FastifyInstance) => {
  app.register(dailyStudyPlansRoutes)
  app.register(weeklyPlansRoutes)
  app.register(favouritePlansRoutes)
}
