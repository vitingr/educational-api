import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyReply, FastifyRequest } from 'fastify'
import { removePlanFromFavouritesParamsSchema } from './schemas'
import { removePlanFromFavouritesFactory } from '@/modules/activity/use-cases/favourite-plans/remove-plan-from-favourites/factory'

export class RemovePlanFromFavouritesController extends BaseController {
  private useCase = removePlanFromFavouritesFactory()

  constructor() {
    super({
      method: 'delete',
      path: '/favourites/:id'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { id } = removePlanFromFavouritesParamsSchema.parse(request.params)

    const response = await this.useCase.execute(id)

    reply.status(200).send(response)
  }
}

export const removePlanFromFavouritesController =
  new RemovePlanFromFavouritesController()
