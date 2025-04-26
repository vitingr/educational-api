import { ControllerError } from '../middlewares/general-error-handler'

export class ProfileAlreadyExistsError extends ControllerError {
  constructor(public status = 409) {
    super('Profile already exists.')
  }
}

export class ProfileDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('Profile does not exist.')
  }
}
