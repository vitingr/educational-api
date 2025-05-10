import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { finishDailyPlanBodySchema } from './schemas'
import { finishDailyPlanFactory } from '@/modules/activity/use-cases/finished-daily-plans/finish-daily-plan/factory'

export class FinishDailyPlanController extends BaseController {
  private useCase = finishDailyPlanFactory()

  constructor() {
    super({
      method: 'post',
      path: '/finish-daily-study-plan'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = finishDailyPlanBodySchema.parse(request.body)

    await this.useCase.execute(payload.planId)

    reply.status(200)
  }
}

export const finishDailyPlanController = new FinishDailyPlanController()
