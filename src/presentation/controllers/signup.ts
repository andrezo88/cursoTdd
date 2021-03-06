import { MissingParamError } from '../errors/missing-param-errors'
import { HttpRequest } from '../protocols/http'
import { badRequest } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validor'
import { InvalidParamError } from '../errors/invalid-param-error'
export class SignupController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): any {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
