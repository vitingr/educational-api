import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyReply, FastifyRequest } from 'fastify'
import { getFavouritePlansParamsSchema } from './schemas'
import { getFavouritePlansFactory } from '@/modules/activity/use-cases/favourite-plans/get-favourite-plans/factory'

export class GetFavouritePlansController extends BaseController {
  private useCase = getFavouritePlansFactory()

  constructor() {
    super({
      method: 'get',
      path: '/favourites/:userId'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { userId } = getFavouritePlansParamsSchema.parse(request.params)

    const response = await this.useCase.execute(userId)

    reply.status(204).send(response)
  }
}

export const getFavouritePlansController = new GetFavouritePlansController()
