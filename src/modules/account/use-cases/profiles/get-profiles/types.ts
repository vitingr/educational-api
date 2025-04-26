import { Profile } from '@prisma/client'

export interface GetProfilesUseCaseReturn {
  profiles: Profile[]
}
