import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getWeeklyPlansParamsSchema } from './schemas'
import { getWeeklyPlansFactory } from '@/modules/activity/use-cases/weekly-plans/get-weekly-plans/factory'

export class GetWeeklyPlansController extends BaseController {
  private useCase = getWeeklyPlansFactory()

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
