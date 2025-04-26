import { PrismaAuthRepository } from '@/modules/account/repositories/prisma/auth-repository'
import { PrismaUsersRepository } from '@/modules/account/repositories/prisma/users-repository'
import { ValidateCodeUseCase } from '@/modules/account/use-cases/auth/validate-code'

export const validateCodeFactory = () => {
  const usersRepository = new PrismaUsersRepository()
  const authCodesRepository = new PrismaAuthRepository()
  const useCase = new ValidateCodeUseCase(usersRepository, authCodesRepository)

  return useCase
}
