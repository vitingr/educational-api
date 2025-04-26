import { SUPPORTED_SOCIAL_AUTH_TYPES } from '@/modules/account/use-cases/auth/social-login/constants'
import { User } from '@prisma/client'

export interface SocialLoginUseCasePayload {
  email: string
  socialToken: string
  socialType: (typeof SUPPORTED_SOCIAL_AUTH_TYPES)[number]
}

export interface SocialLoginUseCaseReturn {
  user: User
}
