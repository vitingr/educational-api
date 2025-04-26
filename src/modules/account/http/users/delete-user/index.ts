import { FastifyReply, FastifyRequest } from 'fastify'

import { deleteUserFactory } from '@/modules/account/use-cases/users/delete-user/factory'

import { deleteUserParamsSchema } from './schemas'
import { BaseController } from '@/shared/infra/http/controllers/base-controler'

export class DeleteUserController extends BaseController {
  private useCase = deleteUserFactory()

  constructor() {
    super({ method: 'delete', path: '/users/:id' })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { id } = deleteUserParamsSchema.parse(request.params)

    const response = await this.useCase.execute(id)

    return reply.status(204).send(response)
  }
}

export const deleteUserController = new DeleteUserController()
