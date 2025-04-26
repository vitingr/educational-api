import { randomUUID } from 'crypto'

import { prisma } from '@/shared/infra/database/prisma/client'
import { Prisma } from '@prisma/client'

import { UsersRepository } from '../interfaces/users-repository'

export class PrismaUsersRepository
  implements UsersRepository
{
  createUser = async ({
    id = randomUUID(),
    ...payload
  }: Prisma.UserUncheckedCreateInput) => {
    return await prisma.user.create({
      data: {
        id,
        ...payload
      },
      include: {
        profile: true
      }
    })
  }

  updateUser = async (
    id: string,
    { id: _, ...payload }: Prisma.UserUncheckedUpdateInput
  ) => {
    return await prisma.user.update({
      where: {
        id
      },
      data: {
        ...payload
      },
      include: {
        profile: true
      }
    })
  }

  getUserById = async (id: string) => {
    return await prisma.user.findUnique({
      where: {
        id
      },
      include: {
        profile: true
      }
    })
  }

  getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
      where: {
        email
      },
      include: {
        profile: true
      }
    })
  }

  getUsers = async () => {

    const users = await prisma.user.findMany({
      include: {
        profile: true
      }
    })

    return users
  }

  deleteUser = async (id: string) => {
    return await prisma.user.delete({
      where: {
        id
      }
    })
  }
}
