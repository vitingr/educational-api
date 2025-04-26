import { FastifyInstance } from "fastify";
import { usersRoutes } from "./users/routes";
import { authRoutes } from "./auth/routes";

export const accountRoutes = (app: FastifyInstance) => {
  app.register(usersRoutes)
  app.register(authRoutes)
}
