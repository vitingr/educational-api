import { Prisma, User } from '@prisma/client'

export interface CreateUserUseCasePayload
  extends Prisma.UserUncheckedCreateInput {}

export interface CreateUserUseCaseReturn {
  user: User
}
