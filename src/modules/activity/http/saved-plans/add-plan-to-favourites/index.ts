import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyReply, FastifyRequest } from 'fastify'
import { addPlanFromFavouritesBodySchema } from './schemas'
import { addPlanToFavouritesFactory } from '@/modules/activity/use-cases/favourite-plans/add-plan-to-favourites/factory'

export class AddPlanToFavouritesController extends BaseController {
  private useCase = addPlanToFavouritesFactory()

  constructor() {
    super({
      method: 'post',
      path: '/favourites/add'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const payload = addPlanFromFavouritesBodySchema.parse(request.body)

    const response = await this.useCase.execute(payload)

    reply.status(200).send(response)
  }
}

export const addPlanToFavouritesController = new AddPlanToFavouritesController()
