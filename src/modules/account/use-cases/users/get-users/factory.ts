import { PrismaUsersRepository } from '@/modules/account/repositories/prisma/users-repository'
import { GetUsersUseCase } from '@/modules/account/use-cases/users/get-users'

export const getUsersFactory = () => {
  const repository = new PrismaUsersRepository()
  const useCase = new GetUsersUseCase(repository)

  return useCase
}
