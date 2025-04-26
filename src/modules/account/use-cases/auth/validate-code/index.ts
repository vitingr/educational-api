import { AuthRepository } from '@/modules/account/repositories/interfaces/auth-repository'
import { UsersRepository } from '@/modules/account/repositories/interfaces/users-repository'
import { InvalidAuthCodeError } from '@/shared/infra/http/exceptions/auth'
import { UserDoesNotExistError } from '@/shared/infra/http/exceptions/user'

import { ValidateCodeUseCasePayload, ValidateCodeUseCaseReturn } from './types'

export class ValidateCodeUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly authCodesRepository: AuthRepository
  ) {}

  private async validateUser(email: string) {
    const user = await this.usersRepository.getUserByEmail(email)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    return user
  }

  private async validateAuthCode(code: string, userId: string) {
    const authCode = await this.authCodesRepository.getAuthCode({
      code,
      userId,
      expiresAt: {
        gte: new Date()
      },
      isUsed: false
    })

    if (!authCode) {
      throw new InvalidAuthCodeError()
    }
    return authCode
  }

  execute = async ({
    email,
    code
  }: ValidateCodeUseCasePayload): Promise<ValidateCodeUseCaseReturn> => {
    const user = await this.validateUser(email)
    const authCode = await this.validateAuthCode(code, user.id)

    await this.authCodesRepository.updateAuthCode(authCode.id, {
      isUsed: true
    })

    return { user }
  }
}
