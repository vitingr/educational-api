import { ControllerError } from '../middlewares/general-error-handler'

export class WeeklyPlanAlreadyExistsError extends ControllerError {
  constructor(public status = 409) {
    super('Weekly study plan already exists.')
  }
}

export class WeeklyPlanDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('Weekly study plan does not exist.')
  }
}
