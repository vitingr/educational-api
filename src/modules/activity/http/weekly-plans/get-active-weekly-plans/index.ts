import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getActiveWeeklyPlansParamsSchema } from './schemas'
import { getActiveWeeklyPlansFactory } from '@/modules/activity/use-cases/weekly-plans/get-active-weekly-plans/factory'

export class GetActiveWeeklyPlansController extends BaseController {
  private useCase = getActiveWeeklyPlansFactory()

  constructor() {
    super({
      method: 'get',
      path: '/weekly-study-plans/active-plans/:userId'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = getActiveWeeklyPlansParamsSchema.parse(request.params)

    const response = await this.useCase.execute(payload.userId)

    reply.status(200).send(response)
  }
}

export const getActiveWeeklyPlansController =
  new GetActiveWeeklyPlansController()
