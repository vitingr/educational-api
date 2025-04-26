import { UsersRepository } from '@/modules/account/repositories/interfaces/users-repository'
import { UserDoesNotExistError } from '@/shared/infra/http/exceptions/user'

import { GetUserByEmailUseCaseReturn } from './types'

export class GetUserByEmailUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute = async (email: string): Promise<GetUserByEmailUseCaseReturn> => {
    const user = await this.usersRepository.getUserByEmail(email)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    return {
      user
    }
  }
}
