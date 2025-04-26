import { SUPPORTED_SOCIAL_AUTH_TYPES } from '@/modules/account/use-cases/auth/social-login/constants'
import z from 'zod'

export const socialLoginBodySchema = z.object({
  email: z.string().email(),
  socialToken: z.string(),
  socialType: z.enum(SUPPORTED_SOCIAL_AUTH_TYPES)
})
