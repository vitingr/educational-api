import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { finishWeeklyPlanBodySchema } from './schemas'
import { finishWeeklyPlanFactory } from '@/modules/activity/use-cases/finished-weekly-plans/finish-weekly-plan/factory'

export class FinishWeeklyPlanController extends BaseController {
  private useCase = finishWeeklyPlanFactory()

  constructor() {
    super({
      method: 'post',
      path: '/finish-weekly-study-plan'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = finishWeeklyPlanBodySchema.parse(request.body)

    await this.useCase.execute(payload.planId)

    reply.status(200)
  }
}

export const finishWeeklyPlanController = new FinishWeeklyPlanController()
