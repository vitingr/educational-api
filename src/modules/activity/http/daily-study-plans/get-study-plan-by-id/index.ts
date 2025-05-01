import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getDailyStudyPlanByIdParamsSchema } from './schemas'
import { getDailyStudyPlanByIdFactory } from '@/modules/activity/use-cases/daily-study-plans/get-daily-study-plan-by-id/factory'

export class GetDailyStudyPlanByIdController extends BaseController {
  private useCase = getDailyStudyPlanByIdFactory()

  constructor() {
    super({
      method: 'get',
      path: '/daily-study-plans/get-study-plan-by-id/:id'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = getDailyStudyPlanByIdParamsSchema.parse(request.params)

    const response = await this.useCase.execute(payload.id)

    reply.status(200).send(response)
  }
}

export const getDailyStudyPlanByIdController =
  new GetDailyStudyPlanByIdController()
