import { ControllerError } from '../middlewares/general-error-handler'

export class DailyStudyPlanAlreadyExistsError extends ControllerError {
  constructor(public status = 409) {
    super('Daily study plan already exists.')
  }
}

export class DailyStudyPlanDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('Daily study plan does not exist.')
  }
}
