import { Prisma, User } from '@prisma/client'

export interface UpdateUserUseCasePayload
  extends Omit<Prisma.UserUncheckedUpdateInput, 'id'> {
  id: string
}

export interface UpdateUserUseCaseReturn {
  user: User
}
