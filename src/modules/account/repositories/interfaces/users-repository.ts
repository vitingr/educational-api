import { Prisma, User } from '@prisma/client'

export type UserWithProfileInclude = Prisma.UserGetPayload<{
  include: { profile: true }
}>

export interface UsersRepository {
  createUser: (payload: Prisma.UserUncheckedCreateInput) => Promise<User>
  deleteUser: (id: string) => Promise<User | null>
  getUserByEmail: (email: string) => Promise<UserWithProfileInclude | null>
  getUserById: (id: string) => Promise<UserWithProfileInclude | null>
  getUsers: () => Promise<User[]>
  updateUser: (
    id: string,
    payload: Prisma.UserUncheckedUpdateInput
  ) => Promise<User | null>
}
