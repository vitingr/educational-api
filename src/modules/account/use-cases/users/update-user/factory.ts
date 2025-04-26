import { PrismaUsersRepository } from '@/modules/account/repositories/prisma/users-repository'
import { UpdateUserUseCase } from '@/modules/account/use-cases/users/update-user'

export const updateUserFactory = () => {
  const repository = new PrismaUsersRepository()
  const useCase = new UpdateUserUseCase(repository)

  return useCase
}
