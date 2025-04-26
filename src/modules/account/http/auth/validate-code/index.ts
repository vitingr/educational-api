import { FastifyReply, FastifyRequest } from 'fastify'
import { AuthController } from '../controller'
import { validateCodeBodySchema } from './schemas'
import { validateCodeFactory } from '@/modules/account/use-cases/auth/validate-code/factory'

export class ValidateCodeController extends AuthController {
  private useCase = validateCodeFactory()

  constructor() {
    super({ method: 'post', path: '/validate-code', isPublicRoute: true })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const payload = validateCodeBodySchema.parse(request.body)

    const response = await this.useCase.execute(payload)

    const {
      user: { id }
    } = response

    const { token, refreshToken } = await this.signJwtTokens(reply, { id })

    return reply.status(200).send({
      ...response,
      token,
      refreshToken
    })
  }
}

export const validateCodeController = new ValidateCodeController()
