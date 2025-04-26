import { ProfilesRepository } from '@/modules/account/repositories/interfaces/profiles-repository'
import { ProfileAlreadyExistsError } from '@/shared/infra/http/exceptions/profile'

import {
  CreateProfileUseCasePayload,
  CreateProfileUseCaseReturn
} from './types'

export class CreateProfileUseCase {
  constructor(private profilesRepository: ProfilesRepository) {}

  execute = async (
    payload: CreateProfileUseCasePayload
  ): Promise<CreateProfileUseCaseReturn> => {
    const { id, userId } = payload

    const profileWithSameUserId =
      await this.profilesRepository.getProfileByUserId(userId)

    if (profileWithSameUserId) {
      throw new ProfileAlreadyExistsError()
    }

    if (id) {
      const profileWithSameId = await this.profilesRepository.getProfileById(id)

      if (profileWithSameId) {
        throw new ProfileAlreadyExistsError()
      }
    }

    const profile = await this.profilesRepository.createProfile(payload)

    return {
      profile
    }
  }
}
