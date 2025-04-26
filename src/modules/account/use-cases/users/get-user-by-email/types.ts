import { User } from '@prisma/client'

export interface GetUserByEmailUseCaseReturn {
  user: User
}
