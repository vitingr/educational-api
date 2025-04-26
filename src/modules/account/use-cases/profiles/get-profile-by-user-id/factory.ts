import { PrismaProfilesRepository } from '@/modules/account/repositories/prisma/profiles-repository'
import { GetProfileByUserIdUseCase } from '@/modules/account/use-cases/profiles/get-profile-by-user-id'

export const getProfileByUserIdFactory = () => {
  const repository = new PrismaProfilesRepository()
  const useCase = new GetProfileByUserIdUseCase(repository)

  return useCase
}
