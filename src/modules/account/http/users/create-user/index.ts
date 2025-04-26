import { FastifyReply, FastifyRequest } from 'fastify'

import { createUserBodySchema } from './schemas'
import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { createUserFactory } from '@/modules/account/use-cases/users/create-user/factory'

export class CreateUserController extends BaseController {
  private useCase = createUserFactory()

  constructor() {
    super({ method: 'post', path: '/users' })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const payload = createUserBodySchema.parse(request.body)

    const response = await this.useCase.execute(payload)

    return reply.status(200).send(response)
  }
}

export const createUserController = new CreateUserController()
