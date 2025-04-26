import { FastifyReply, FastifyRequest } from 'fastify'

import { AuthController } from '../controller'

export class RefreshTokenController extends AuthController {
  constructor() {
    super({ method: 'post', path: '/refresh-token' })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const { token, refreshToken } = await this.signJwtTokens(reply, {
      id: request.user.sub
    })

    return reply.status(200).send({
      token,
      refreshToken
    })
  }
}

export const refreshTokenController = new RefreshTokenController()
