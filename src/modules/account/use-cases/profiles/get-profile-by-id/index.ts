import { ProfilesRepository } from '@/modules/account/repositories/interfaces/profiles-repository'
import { ProfileDoesNotExistError } from '@/shared/infra/http/exceptions/profile'

import { GetProfileByIdUseCaseReturn } from './types'

export class GetProfileByIdUseCase {
  constructor(private profilesRepository: ProfilesRepository) {}

  execute = async (id: string): Promise<GetProfileByIdUseCaseReturn> => {
    const profile = await this.profilesRepository.getProfileById(id)

    if (!profile) {
      throw new ProfileDoesNotExistError()
    }

    return {
      profile
    }
  }
}
