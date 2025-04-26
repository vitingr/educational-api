import { FastifyReply, FastifyRequest } from 'fastify'

import { updateUserFactory } from '@/modules/account/use-cases/users/update-user/factory'
import { updateUserBodySchema, updateUserParamsSchema } from './schemas'
import { BaseController } from '@/shared/infra/http/controllers/base-controler'

export class UpdateUserController extends BaseController {
  private useCase = updateUserFactory()

  constructor() {
    super({ method: 'patch', path: '/users/:id' })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { id } = updateUserParamsSchema.parse(request.params)

    const payload = updateUserBodySchema.parse(request.body)

    const response = await this.useCase.execute({
      id,
      ...payload
    })

    return reply.status(200).send(response)
  }
}

export const updateUserController = new UpdateUserController()
