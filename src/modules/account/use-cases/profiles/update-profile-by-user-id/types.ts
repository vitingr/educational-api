import { Prisma, Profile } from '@prisma/client'

export interface UpdateProfileByUserIdUseCasePayload
  extends Omit<Prisma.ProfileUncheckedUpdateInput, 'id'> {
  userId: string
}

export interface UpdateProfileByUserIdUseCaseReturn {
  profile: Profile
}
