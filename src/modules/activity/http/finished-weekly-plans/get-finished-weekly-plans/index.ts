import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'

import { getFinishedWeeklyPlansParamsSchema } from './schemas'
import { getFinishedWeeklyPlansFactory } from '@/modules/activity/use-cases/finished-weekly-plans/get-finished-weekly-plans/factory'

export class GetFinishedWeeklyPlansPlanController extends BaseController {
  private useCase = getFinishedWeeklyPlansFactory()

  constructor() {
    super({
      method: 'get',
      path: '/finished-weekly-study-plans'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = getFinishedWeeklyPlansParamsSchema.parse(request.params)

    await this.useCase.execute(payload.weeklyPlanId)

    reply.status(200)
  }
}

export const getFinishedWeeklyPlansPlanController =
  new GetFinishedWeeklyPlansPlanController()
