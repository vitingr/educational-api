import { UsersRepository } from '@/modules/account/repositories/interfaces/users-repository'
import { UserDoesNotExistError } from '@/shared/infra/http/exceptions/user'

import { GetUserByIdUseCaseReturn } from './types'

export class GetUserByIdUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute = async (id: string): Promise<GetUserByIdUseCaseReturn> => {
    const user = await this.usersRepository.getUserById(id)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    return {
      user
    }
  }
}
