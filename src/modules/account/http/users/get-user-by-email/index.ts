import { FastifyReply, FastifyRequest } from 'fastify'

import { getUserByEmailFactory } from '@/modules/account/use-cases/users/get-user-by-email/factory'

import { getUserByEmailParamsSchema } from './schemas'
import { BaseController } from '@/shared/infra/http/controllers/base-controler'

export class GetUserByEmailController extends BaseController {
  private useCase = getUserByEmailFactory()

  constructor() {
    super({ method: 'get', path: '/users/email/:email', isPublicRoute: true })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { email } = getUserByEmailParamsSchema.parse(request.params)

    const response = await this.useCase.execute(email)

    return reply.status(200).send(response)
  }
}

export const getUserByEmailController = new GetUserByEmailController()
