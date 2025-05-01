import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getDailyStudyPlansParamsSchema } from './schemas'
import { getDailyStudyPlansFactory } from '@/modules/activity/use-cases/daily-study-plans/get-daily-study-plans/factory'

export class GetDailyStudyPlansController extends BaseController {
  private useCase = getDailyStudyPlansFactory()

  constructor() {
    super({
      method: 'get',
      path: '/daily-study-plans/:id'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = getDailyStudyPlansParamsSchema.parse(request.params)

    const response = await this.useCase.execute(payload.weeklyPlanId)

    reply.status(200).send(response)
  }
}

export const getDailyStudyPlansController = new GetDailyStudyPlansController()
