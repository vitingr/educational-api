import { AuthCode, Prisma } from '@prisma/client'

export interface AuthRepository {
  createAuthCode: (
    payload: Prisma.AuthCodeUncheckedCreateInput
  ) => Promise<AuthCode>
  getAuthCode: (payload: Prisma.AuthCodeWhereInput) => Promise<AuthCode | null>
  getAuthCodeByUserId: (userId: string) => Promise<AuthCode | null>
  updateAuthCode: (
    id: string,
    payload: Prisma.AuthCodeUncheckedUpdateInput
  ) => Promise<AuthCode>
}
