import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'

import { getFinishedDailyPlansParamsSchema } from './schemas'
import { getFinishedDailyPlansFactory } from '@/modules/activity/use-cases/finished-daily-plans/get-finished-daily-plans/factory'

export class GetFinishedDailyPlansPlanController extends BaseController {
  private useCase = getFinishedDailyPlansFactory()

  constructor() {
    super({
      method: 'get',
      path: '/finished-daily-study-plans'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = getFinishedDailyPlansParamsSchema.parse(request.params)

    await this.useCase.execute(payload.weeklyPlanId)

    reply.status(200)
  }
}

export const getFinishedDailyPlansPlanController =
  new GetFinishedDailyPlansPlanController()
