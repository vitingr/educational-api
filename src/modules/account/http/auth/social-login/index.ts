import { FastifyReply, FastifyRequest } from 'fastify'
import { AuthController } from '../controller'
import { socialLoginBodySchema } from './schemas'
import { socialLoginFactory } from '@/modules/account/use-cases/auth/social-login/factory'

export class SocialLoginController extends AuthController {
  private useCase = socialLoginFactory()

  constructor() {
    super({ method: 'post', path: '/social-login', isPublicRoute: true })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const payload = socialLoginBodySchema.parse(request.body)

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

export const socialLoginController = new SocialLoginController()
