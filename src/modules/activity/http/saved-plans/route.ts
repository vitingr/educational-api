import { FastifyInstance } from "fastify";
import { getFavouritePlansController } from "./get-favourite-plans";
import { removePlanFromFavouritesController } from "./remove-plan-from-favourites";
import { addPlanToFavouritesController } from "./add-plan-to-favourites";

export const favouritePlansRoutes = async (app: FastifyInstance) => {
  getFavouritePlansController.register(app)
  removePlanFromFavouritesController.register(app)
  addPlanToFavouritesController.register(app)
}
