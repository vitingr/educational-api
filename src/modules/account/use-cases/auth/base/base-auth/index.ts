import { AuthRepository } from '@/modules/account/repositories/interfaces/auth-repository'
import {
  UsersRepository
} from '@/modules/account/repositories/interfaces/users-repository'
import { ProfileDoesNotExistError } from '@/shared/infra/http/exceptions/profile'

import { Profile } from '@prisma/client'

import { UpdateUserProfilePayload } from './types'
import { createUserFactory } from '../../../users/create-user/factory'
import { createProfileFactory } from '../../../profiles/create-profile/factory'
import { updateProfileByUserIdFactory } from '../../../profiles/update-profile-by-user-id/factory'

const createUserUseCase = createUserFactory()
const createProfileUseCase = createProfileFactory()
const updateProfileByUserIdUseCase = updateProfileByUserIdFactory()

export abstract class BaseAuthUseCase {
  constructor(
    protected readonly usersRepository: UsersRepository,
    protected readonly authCodesRepository: AuthRepository
  ) {}

  generateAndStoreAuthCode = async (userId: string) => {
    const fourDigitsCode = Math.floor(1000 + Math.random() * 9000).toString()

    return this.authCodesRepository.createAuthCode({
      userId,
      code: fourDigitsCode,
      expiresAt: new Date(Date.now() + 1000 * 60 * 15) // 15 minutes
    })
  }

  updateUserProfile = async (
    payload: UpdateUserProfilePayload
  ): Promise<Profile | null> => {
    try {
      const { profile } = await updateProfileByUserIdUseCase.execute(payload)

      return profile
    } catch (error) {
      if (error instanceof ProfileDoesNotExistError) {
        const { profile } = await createProfileUseCase.execute(payload)

        return profile
      }

      throw error
    }
  }

  // review here
  protected async getOrCreateUser(
    email: string
  ) {
    let user = await this.usersRepository.getUserByEmail(email)

    if (!user) {
      const { user: newUser } = await createUserUseCase.execute({ email })

      user = {
        ...newUser,
        profile: null
      }
    }

    if (user) return user
  }
}
