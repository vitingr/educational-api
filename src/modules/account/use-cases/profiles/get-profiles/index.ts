import { ProfilesRepository } from '@/modules/account/repositories/interfaces/profiles-repository'

import { GetProfilesUseCaseReturn } from './types'

export class GetProfilesUseCase {
  constructor(private profilesRepository: ProfilesRepository) {}

  execute = async (): Promise<GetProfilesUseCaseReturn> => {
    const data = await this.profilesRepository.getProfiles()

    return {
      profiles: data
    }
  }
}
