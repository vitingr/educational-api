import { Prisma, Profile } from '@prisma/client'

export interface CreateProfileUseCasePayload
  extends Prisma.ProfileUncheckedCreateInput {}

export interface CreateProfileUseCaseReturn {
  profile: Profile
}
