import { PrismaUsersRepository } from '@/modules/account/repositories/prisma/users-repository'
import { GetUserByEmailUseCase } from '@/modules/account/use-cases/users/get-user-by-email'

export const getUserByEmailFactory = () => {
  const repository = new PrismaUsersRepository()
  const useCase = new GetUserByEmailUseCase(repository)

  return useCase
}
