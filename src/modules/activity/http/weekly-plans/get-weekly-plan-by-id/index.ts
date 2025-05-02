import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getWeeklyPlanByIdParamsSchema } from './schemas'
import { getWeeklyPlanByIdFactory } from '@/modules/activity/use-cases/weekly-plans/get-weekly-plan-id/factory'

export class GetWeeklyPlanByIdController extends BaseController {
  private useCase = getWeeklyPlanByIdFactory()

  constructor() {
    super({
      method: 'get',
      path: '/weekly-study-plans/get-plan-by-id/:id'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = getWeeklyPlanByIdParamsSchema.parse(request.params)

    const response = await this.useCase.execute(payload.id)

    reply.status(200).send(response)
  }
}

export const getWeeklyPlanByIdController =
  new GetWeeklyPlanByIdController()
