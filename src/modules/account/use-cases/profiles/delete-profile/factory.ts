import { PrismaProfilesRepository } from '@/modules/account/repositories/prisma/profiles-repository'
import { DeleteProfileUseCase } from '@/modules/account/use-cases/profiles/delete-profile'

export const deleteProfileFactory = () => {
  const repository = new PrismaProfilesRepository()
  const useCase = new DeleteProfileUseCase(repository)

  return useCase
}
