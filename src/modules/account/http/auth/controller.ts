import { BaseController } from '@/shared/infra/http/controllers/base-controler'
import { FastifyReply } from 'fastify'

export type SignJwtTokensPayload = {
  id: string
}

export abstract class AuthController extends BaseController {
  protected async signJwtTokens(
    reply: FastifyReply,
    { id }: SignJwtTokensPayload
  ) {
    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: id,
          expiresIn: '40m'
        }
      }
    )

    const refreshToken = await reply.jwtSign(
      {},
      {
        sign: {
          sub: id,
          expiresIn: '7d'
        }
      }
    )

    return { token, refreshToken }
  }
}
