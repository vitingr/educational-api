import { Prisma, Profile } from '@prisma/client'

export interface ProfilesRepository {
  createProfile: (
    payload: Prisma.ProfileUncheckedCreateInput
  ) => Promise<Profile>
  deleteProfile: (id: string) => Promise<Profile | null>
  getProfileById: (id: string) => Promise<Profile | null>
  getProfileByUserId: (userId: string) => Promise<Profile | null>
  getProfiles: () => Promise<Profile[]>
  updateProfile: (
    id: string,
    payload: Prisma.ProfileUncheckedUpdateInput
  ) => Promise<Profile | null>
  updateProfileByUserId: (
    userId: string,
    payload: Prisma.ProfileUncheckedUpdateInput
  ) => Promise<Profile | null>
}
