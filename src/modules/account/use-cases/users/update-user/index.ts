import { UsersRepository } from '@/modules/account/repositories/interfaces/users-repository'
import { UserDoesNotExistError } from '@/shared/infra/http/exceptions/user'

import { UpdateUserUseCasePayload, UpdateUserUseCaseReturn } from './types'

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute = async (
    payload: UpdateUserUseCasePayload
  ): Promise<UpdateUserUseCaseReturn> => {
    const { id } = payload

    const userWithSameId = await this.usersRepository.getUserById(id)

    if (!userWithSameId) {
      throw new UserDoesNotExistError()
    }

    const user = await this.usersRepository.updateUser(id, payload)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    return {
      user
    }
  }
}
