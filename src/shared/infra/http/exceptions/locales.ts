import { ControllerError } from '../middlewares/general-error-handler'

export class LocaleAlreadyExistsError extends ControllerError {
  constructor() {
    super('Locale already exists.')
  }
}
