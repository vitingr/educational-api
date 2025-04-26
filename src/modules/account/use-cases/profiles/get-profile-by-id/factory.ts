import { PrismaProfilesRepository } from '@/modules/account/repositories/prisma/profiles-repository'
import { GetProfileByIdUseCase } from '@/modules/account/use-cases/profiles/get-profile-by-id'

export const getProfileByIdFactory = () => {
  const repository = new PrismaProfilesRepository()
  const useCase = new GetProfileByIdUseCase(repository)

  return useCase
}
