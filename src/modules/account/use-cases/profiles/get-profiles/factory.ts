import { PrismaProfilesRepository } from '@/modules/account/repositories/prisma/profiles-repository'
import { GetProfilesUseCase } from '@/modules/account/use-cases/profiles/get-profiles'

export const getProfilesFactory = () => {
  const repository = new PrismaProfilesRepository()
  const useCase = new GetProfilesUseCase(repository)

  return useCase
}
