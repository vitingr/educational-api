import { UsersRepository } from '@/modules/account/repositories/interfaces/users-repository'
import { UserDoesNotExistError } from '@/shared/infra/http/exceptions/user'

import { DeleteUserUseCaseReturn } from './types'

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute = async (id: string): Promise<DeleteUserUseCaseReturn> => {
    const userById = await this.usersRepository.getUserById(id)

    if (!userById) {
      throw new UserDoesNotExistError()
    }

    const user = await this.usersRepository.deleteUser(id)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    return {
      user
    }
  }
}
