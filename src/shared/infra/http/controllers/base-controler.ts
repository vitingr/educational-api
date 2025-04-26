import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

import { GeneralErrorHandler } from '../middlewares/general-error-handler'
import { verifyJWT } from '../middlewares/verify-jwt'

type BaseControllerOptions = {
  method: 'post' | 'get' | 'put' | 'patch' | 'delete'
  path: string
  /** @default false (all routes are protected by default) */
  isPublicRoute?: boolean
}

export abstract class BaseController {
  constructor(protected options: BaseControllerOptions) {
    this.options = options
  }

  protected abstract execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void>

  register(app: FastifyInstance) {
    const { method, path, isPublicRoute } = this.options

    const guardRouteOptions = isPublicRoute ? {} : { onRequest: [verifyJWT] }

    app[method](
      path,
      {
        errorHandler: GeneralErrorHandler.handle.bind(GeneralErrorHandler),
        ...guardRouteOptions
      },
      this.execute.bind(this)
    )
  }
}
