import { User } from '@prisma/client'

export interface ValidateCodeUseCasePayload {
  code: string
  email: string
}

export interface ValidateCodeUseCaseReturn {
  user: User
}
