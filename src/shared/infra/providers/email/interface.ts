export type EmailServiceSendPayload = {
  from: {
    email: string
    name: string
  }
  to: { email: string }[]
  dynamicTemplateData: {
    user_name?: string | null
    auth_code: string
  }
  subject: string
  templateId: string
}

export interface EmailService {
  send(payload: EmailServiceSendPayload): Promise<void>
}
