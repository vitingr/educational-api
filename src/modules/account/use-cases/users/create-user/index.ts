import { UsersRepository } from '@/modules/account/repositories/interfaces/users-repository'
import { UserAlreadyExistsError } from '@/shared/infra/http/exceptions/user'

import { CreateUserUseCasePayload, CreateUserUseCaseReturn } from './types'

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute = async (
    payload: CreateUserUseCasePayload
  ): Promise<CreateUserUseCaseReturn> => {
    const { id, email } = payload

    const userWithSameEmail = await this.usersRepository.getUserByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    if (id) {
      const userWithSameId = await this.usersRepository.getUserById(id)

      if (userWithSameId) {
        throw new UserAlreadyExistsError()
      }
    }

    const user = await this.usersRepository.createUser(payload)

    return {
      user
    }
  }
}
