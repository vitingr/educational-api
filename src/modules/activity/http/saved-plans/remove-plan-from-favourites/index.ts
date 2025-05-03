import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyReply, FastifyRequest } from 'fastify'
import { removePlanFromFavouritesBodySchema } from './schemas'
import { removePlanFromFavouritesFactory } from '@/modules/activity/use-cases/favourite-plans/remove-plan-from-favourites/factory'

export class RemovePlanFromFavouritesController extends BaseController {
  private useCase = removePlanFromFavouritesFactory()

  constructor() {
    super({
      method: 'post',
      path: '/favourites/remove'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { id } = removePlanFromFavouritesBodySchema.parse(request.body)

    const response = await this.useCase.execute(id)

    reply.status(200).send(response)
  }
}

export const removePlanFromFavouritesController =
  new RemovePlanFromFavouritesController()
