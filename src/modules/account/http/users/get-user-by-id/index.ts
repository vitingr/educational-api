import { FastifyReply, FastifyRequest } from 'fastify'

import { getUserByIdFactory } from '@/modules/account/use-cases/users/get-user-by-id/factory'
import { getUserByIdParamsSchema } from './schemas'
import { BaseController } from '@/shared/infra/http/controllers/base-controler'

export class GetUserByIdController extends BaseController {
  private useCase = getUserByIdFactory()

  constructor() {
    super({ method: 'get', path: '/users/:id' })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { id } = getUserByIdParamsSchema.parse(request.params)

    const response = await this.useCase.execute(id)

    return reply.status(200).send(response)
  }
}

export const getUserByIdController = new GetUserByIdController()
