import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyRequest, FastifyReply } from 'fastify'
import { deleteWeeklyPlanParamsSchema } from './schemas'
import { deleteWeeklyPlanFactory } from '@/modules/activity/use-cases/weekly-plans/delete-weekly-plan/factory'

export class DeleteWeeklyPlanController extends BaseController {
  private useCase = deleteWeeklyPlanFactory()

  constructor() {
    super({
      method: 'delete',
      path: '/weekly-study-plans/:id'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const { id } = deleteWeeklyPlanParamsSchema.parse(request.params)

    await this.useCase.execute(id)

    reply.status(204).send()
  }
}

export const deleteWeeklyPlanController =
  new DeleteWeeklyPlanController()
