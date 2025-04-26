import { PrismaProfilesRepository } from '@/modules/account/repositories/prisma/profiles-repository'
import { CreateProfileUseCase } from '@/modules/account/use-cases/profiles/create-profile'

export const createProfileFactory = () => {
  const repository = new PrismaProfilesRepository()
  const useCase = new CreateProfileUseCase(repository)

  return useCase
}
