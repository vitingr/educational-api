import { ProfilesRepository } from '@/modules/account/repositories/interfaces/profiles-repository'
import { ProfileDoesNotExistError } from '@/shared/infra/http/exceptions/profile'

import {
  UpdateProfileUseCasePayload,
  UpdateProfileUseCaseReturn
} from './types'

export class UpdateProfileUseCase {
  constructor(private readonly profilesRepository: ProfilesRepository) {}

  execute = async (
    payload: UpdateProfileUseCasePayload
  ): Promise<UpdateProfileUseCaseReturn> => {
    const { id } = payload

    const profileWithSameId = await this.profilesRepository.getProfileById(id)

    if (!profileWithSameId) {
      throw new ProfileDoesNotExistError()
    }

    const profile = await this.profilesRepository.updateProfile(id, payload)

    if (!profile) {
      throw new ProfileDoesNotExistError()
    }

    return {
      profile
    }
  }
}
