import { PrismaUsersRepository } from '@/modules/account/repositories/prisma/users-repository'
import { GetUserByIdUseCase } from '@/modules/account/use-cases/users/get-user-by-id'

export const getUserByIdFactory = () => {
  const repository = new PrismaUsersRepository()
  const useCase = new GetUserByIdUseCase(repository)

  return useCase
}
