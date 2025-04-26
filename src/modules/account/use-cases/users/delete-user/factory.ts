import { PrismaUsersRepository } from '@/modules/account/repositories/prisma/users-repository'
import { DeleteUserUseCase } from '@/modules/account/use-cases/users/delete-user'

export const deleteUserFactory = () => {
  const repository = new PrismaUsersRepository()
  const useCase = new DeleteUserUseCase(repository)

  return useCase
}
