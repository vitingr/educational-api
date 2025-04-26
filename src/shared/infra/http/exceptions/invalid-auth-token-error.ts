import { ControllerError } from '../middlewares/general-error-handler'

export class InvalidAppAuthTokenError extends ControllerError {
  constructor(public status = 401) {
    super('Invalid app auth token.')
  }
}
