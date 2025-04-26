import { Prisma, Profile } from '@prisma/client'

export interface UpdateProfileUseCasePayload
  extends Omit<Prisma.ProfileUncheckedUpdateInput, 'id'> {
  id: string
}

export interface UpdateProfileUseCaseReturn {
  profile: Profile
}
