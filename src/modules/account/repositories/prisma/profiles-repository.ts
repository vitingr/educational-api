import { randomUUID } from 'crypto'

import { prisma } from '@/shared/infra/database/prisma/client'
import { Prisma } from '@prisma/client'

import { ProfilesRepository } from '../interfaces/profiles-repository'

export class PrismaProfilesRepository
  implements ProfilesRepository
{
  createProfile = async ({
    id = randomUUID(),
    ...payload
  }: Prisma.ProfileUncheckedCreateInput) => {
    return await prisma.profile.create({
      data: {
        id,
        ...payload
      },
      include: {
        user: true
      }
    })
  }

  updateProfile = async (
    id: string,
    { id: _, ...payload }: Prisma.ProfileUncheckedUpdateInput
  ) => {
    return await prisma.profile.update({
      where: {
        id
      },
      data: {
        ...payload
      },
      include: {
        user: true
      }
    })
  }

  updateProfileByUserId = async (
    userId: string,
    { id: _, ...payload }: Prisma.ProfileUncheckedUpdateInput
  ) => {
    return await prisma.profile.update({
      where: {
        userId
      },
      data: payload
    })
  }

  getProfileById = async (id: string) => {
    return await prisma.profile.findUnique({
      where: {
        id
      },
      include: {
        user: true
      }
    })
  }

  getProfileByUserId = async (userId: string) => {
    return await prisma.profile.findUnique({
      where: {
        userId
      },
      include: {
        user: true
      }
    })
  }

  getProfiles = async () => {
    const profiles = await prisma.profile.findMany({
      include: {
        user: true
      }
    })

    return profiles
  }

  deleteProfile = async (id: string) => {
    return await prisma.profile.delete({
      where: {
        id
      }
    })
  }
}
