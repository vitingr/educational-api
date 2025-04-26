import { ProfilesRepository } from '@/modules/account/repositories/interfaces/profiles-repository'
import { ProfileDoesNotExistError } from '@/shared/infra/http/exceptions/profile'

import { DeleteProfileUseCaseReturn } from './types'

export class DeleteProfileUseCase {
  constructor(private profilesRepository: ProfilesRepository) {}

  execute = async (id: string): Promise<DeleteProfileUseCaseReturn> => {
    const profileById = await this.profilesRepository.getProfileById(id)

    if (!profileById) {
      throw new ProfileDoesNotExistError()
    }

    const profile = await this.profilesRepository.deleteProfile(id)

    if (!profile) {
      throw new ProfileDoesNotExistError()
    }

    return {
      profile
    }
  }
}
