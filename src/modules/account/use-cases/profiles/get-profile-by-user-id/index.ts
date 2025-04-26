import { ProfilesRepository } from '@/modules/account/repositories/interfaces/profiles-repository'
import { ProfileDoesNotExistError } from '@/shared/infra/http/exceptions/profile'

import { GetProfileByUserIdUseCaseReturn } from './types'

export class GetProfileByUserIdUseCase {
  constructor(private profilesRepository: ProfilesRepository) {}

  execute = async (
    userId: string
  ): Promise<GetProfileByUserIdUseCaseReturn> => {
    const profile = await this.profilesRepository.getProfileByUserId(userId)

    if (!profile) {
      throw new ProfileDoesNotExistError()
    }

    return {
      profile
    }
  }
}
