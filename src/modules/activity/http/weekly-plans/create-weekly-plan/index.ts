import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyReply, FastifyRequest } from 'fastify'
import { createWeeklyPlanBodySchema } from './schemas'
import { createWeeklyStudyPlanFactory } from '@/modules/activity/use-cases/weekly-plans/create-weekly-plan/factory'

export class CreateWeeklyPlanController extends BaseController {
  private useCase = createWeeklyStudyPlanFactory()

  constructor() {
    super({
      method: 'post',
      path: '/weekly-study-plans'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const payload = createWeeklyPlanBodySchema.parse(request.body)

    const response = await this.useCase.execute({
      ...payload,
      isCompleted: false,
    })

    reply.status(201).send(response)
  }
}

export const createWeeklyPlanController = new CreateWeeklyPlanController()
