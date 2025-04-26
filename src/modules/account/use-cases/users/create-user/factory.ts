import { PrismaUsersRepository } from '@/modules/account/repositories/prisma/users-repository'
import { CreateUserUseCase } from '@/modules/account/use-cases/users/create-user'

export const createUserFactory = () => {
  const repository = new PrismaUsersRepository()
  const useCase = new CreateUserUseCase(repository)

  return useCase
}
