import { FastifyInstance } from 'fastify'

import { refreshTokenController } from './refresh-token'
import { socialLoginController } from './social-login'
import { validateCodeController } from './validate-code'

export const authRoutes = async (app: FastifyInstance) => {
  validateCodeController.register(app)
  socialLoginController.register(app)
  refreshTokenController.register(app)
}
