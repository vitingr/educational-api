import { PrismaProfilesRepository } from '@/modules/account/repositories/prisma/profiles-repository'
import { UpdateProfileByUserIdUseCase } from '@/modules/account/use-cases/profiles/update-profile-by-user-id'

export const updateProfileByUserIdFactory = () => {
  const repository = new PrismaProfilesRepository()
  const useCase = new UpdateProfileByUserIdUseCase(repository)

  return useCase
}
