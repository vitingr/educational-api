import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyReply, FastifyRequest } from 'fastify'
import { createDailyStudyPlanBodySchema } from './schemas'
import { createDailyStudyPlanFactory } from '@/modules/activity/use-cases/daily-study-plans/create-daily-study-plan/factory'

export class CreateDailyStudyPlanController extends BaseController {
  private useCase = createDailyStudyPlanFactory()

  constructor() {
    super({
      method: 'post',
      path: '/daily-study-plans'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const payload = createDailyStudyPlanBodySchema.parse(request.body)

    const response = await this.useCase.execute(payload)

    reply.status(200).send(response)
  }
}

export const createDailyStudyPlanController =
  new CreateDailyStudyPlanController()
