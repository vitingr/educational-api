import { ControllerError } from '../middlewares/general-error-handler'

export class FavouritePlanAlreadyExistsError extends ControllerError {
  constructor(public status = 409) {
    super('Favourite study plan already exists.')
  }
}

export class FavouritePlanDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('Favourite study plan does not exist.')
  }
}
