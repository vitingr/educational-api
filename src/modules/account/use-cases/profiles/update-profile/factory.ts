import { PrismaProfilesRepository } from '@/modules/account/repositories/prisma/profiles-repository'
import { UpdateProfileUseCase } from '@/modules/account/use-cases/profiles/update-profile'

export const updateProfileFactory = () => {
  const repository = new PrismaProfilesRepository()
  const useCase = new UpdateProfileUseCase(repository)

  return useCase
}
