import { randomUUID } from 'crypto'

import { prisma } from '@/shared/infra/database/prisma/client'
import { Prisma } from '@prisma/client'

import { AuthRepository } from '../interfaces/auth-repository'

export class PrismaAuthRepository implements AuthRepository {
  createAuthCode = async (payload: Prisma.AuthCodeUncheckedCreateInput) => {
    return await prisma.authCode.create({
      data: {
        id: randomUUID(),
        ...payload
      },
      include: {
        user: true
      }
    })
  }

  updateAuthCode = async (
    id: string,
    payload: Prisma.AuthCodeUncheckedUpdateInput
  ) => {
    return await prisma.authCode.update({
      where: {
        id
      },
      data: payload
    })
  }

  getAuthCode = async (payload: Prisma.AuthCodeWhereInput) => {
    return await prisma.authCode.findFirst({
      where: payload
    })
  }

  getAuthCodeByUserId = async (userId: string) => {
    return await prisma.authCode.findFirst({
      where: {
        userId
      },
      include: {
        user: true
      }
    })
  }
}
