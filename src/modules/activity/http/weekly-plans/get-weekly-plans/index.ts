import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getWeeklyPlansParamsSchema } from './schemas'
import { getDailyStudyPlansFactory } from '@/modules/activity/use-cases/daily-study-plans/get-daily-study-plans/factory'

export class GetWeeklyPlansController extends BaseController {
  private useCase = getDailyStudyPlansFactory()

  constructor() {
    super({
      method: 'get',
      path: '/weekly-study-plans/:userId'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = getWeeklyPlansParamsSchema.parse(request.params)

    const response = await this.useCase.execute(payload.userId)

    reply.status(200).send(response)
  }
}

export const getWeeklyPlansController = new GetWeeklyPlansController()
