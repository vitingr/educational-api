import { OAuth2Client } from 'google-auth-library'
import { env } from '@/shared/config/env'
import { InvalidSocialAccountError } from '@/shared/infra/http/exceptions/auth'
import { UserDoesNotExistError } from '@/shared/infra/http/exceptions/user'
import { BaseAuthUseCase } from '../base/base-auth'
import { UsersRepository } from '@/modules/account/repositories/interfaces/users-repository'
import { AuthRepository } from '@/modules/account/repositories/interfaces/auth-repository'
import { SocialLoginUseCasePayload, SocialLoginUseCaseReturn } from './types'

export class SocialLoginUseCase extends BaseAuthUseCase {
  private googleClient: OAuth2Client

  constructor(
    usersRepository: UsersRepository,
    authCodesRepository: AuthRepository
  ) {
    super(usersRepository, authCodesRepository)
    this.googleClient = new OAuth2Client(env.GOOGLE_CLIENT_ID)
  }

  validateGoogleAccount = async (socialToken: string) => {
    try {
      const ticket = await this.googleClient.verifyIdToken({
        idToken: socialToken,
        audience: env.GOOGLE_CLIENT_ID
      })

      const payload = ticket.getPayload()

      if (!payload) {
        throw new InvalidSocialAccountError()
      }

      return payload
    } catch (error) {
      console.error({
        validateGoogleAccount: error
      })

      throw new InvalidSocialAccountError()
    }
  }

  execute = async (
    payload: SocialLoginUseCasePayload
  ): Promise<SocialLoginUseCaseReturn> => {
    const { email, socialType, socialToken } = payload

    const user = await this.getOrCreateUser(email)

    if (!user?.id ) {
      throw new UserDoesNotExistError()
    }

    switch (socialType) {
      case 'google':
        await this.validateGoogleAccount(socialToken)
        break
    }

    return { user }
  }
}
