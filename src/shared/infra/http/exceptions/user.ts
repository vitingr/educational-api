import { ControllerError } from '../middlewares/general-error-handler'

export class UserAlreadyExistsError extends ControllerError {
  constructor(public status = 409) {
    super('User already exists.')
  }
}

export class UserDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('User does not exist.')
  }
}
