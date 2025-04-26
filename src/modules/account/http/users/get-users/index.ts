import { FastifyReply, FastifyRequest } from 'fastify'

import { getUsersFactory } from '@/modules/account/use-cases/users/get-users/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controler'

export class GetUsersController extends BaseController {
  private useCase = getUsersFactory()

  constructor() {
    super({ method: 'get', path: '/users' })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const response = await this.useCase.execute()

    return reply.status(200).send(response)
  }
}

export const getUsersController = new GetUsersController()
