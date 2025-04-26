import { Profile } from '@prisma/client'

export interface UpdateUserProfilePayload
  extends Pick<Profile, 'userId'> {}
