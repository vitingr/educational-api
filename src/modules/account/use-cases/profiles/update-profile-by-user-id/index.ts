import { ProfilesRepository } from '@/modules/account/repositories/interfaces/profiles-repository'
import { ProfileDoesNotExistError } from '@/shared/infra/http/exceptions/profile'

import {
  UpdateProfileByUserIdUseCasePayload,
  UpdateProfileByUserIdUseCaseReturn
} from './types'

export class UpdateProfileByUserIdUseCase {
  constructor(private profilesRepository: ProfilesRepository) {}

  execute = async (
    payload: UpdateProfileByUserIdUseCasePayload
  ): Promise<UpdateProfileByUserIdUseCaseReturn> => {
    const { userId } = payload

    const profileWithSameUserId =
      await this.profilesRepository.getProfileByUserId(userId)

    if (!profileWithSameUserId) {
      throw new ProfileDoesNotExistError()
    }

    const profile = await this.profilesRepository.updateProfileByUserId(
      userId,
      payload
    )

    if (!profile) {
      throw new ProfileDoesNotExistError()
    }

    return {
      profile
    }
  }
}
