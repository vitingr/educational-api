import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { deleteDailyStudyPlanParamsSchema } from './schemas'
import { deleteDailyStudyPlanFactory } from '@/modules/activity/use-cases/daily-study-plans/delete-daily-study-plan/factory'

export class DeleteDailyStudyPlanController extends BaseController {
  private useCase = deleteDailyStudyPlanFactory()

  constructor() {
    super({
      method: 'delete',
      path: '/daily-study-plans/:id'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const { id } = deleteDailyStudyPlanParamsSchema.parse(request.params)

    await this.useCase.execute(id)

    reply.status(204).send()
  }
}

export const deleteDailyStudyPlanController =
  new DeleteDailyStudyPlanController()
