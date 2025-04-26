import { UsersRepository } from '@/modules/account/repositories/interfaces/users-repository'
import { GetUsersUseCaseReturn } from './types'

export class GetUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute = async (): Promise<GetUsersUseCaseReturn> => {
    const data = await this.usersRepository.getUsers( )

    return {
      users: data
    }
  }
}
