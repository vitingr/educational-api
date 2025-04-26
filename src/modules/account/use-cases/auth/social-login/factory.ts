import { PrismaAuthRepository } from '@/modules/account/repositories/prisma/auth-repository'
import { PrismaUsersRepository } from '@/modules/account/repositories/prisma/users-repository'
import { SocialLoginUseCase } from '.'

export const socialLoginFactory = () => {
  const usersRepository = new PrismaUsersRepository()
  const authCodesRepository = new PrismaAuthRepository()
  const useCase = new SocialLoginUseCase(usersRepository, authCodesRepository)

  return useCase
}
