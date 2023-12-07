import { InternalCode } from '@data/common/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

class RequiredValidator extends AbstractValidator {

  private _checkValueNan: boolean

  constructor (checkValueNan = false) {
    super()
    this._checkValueNan = checkValueNan
  }

  public override validate (value: unknown): IValidationError {
    let isError: boolean

    if (Array.isArray(value)) isError = this._validateArray(value)
    else isError = this._validateDefault(value)

    if (isError) {
      return {
        isSuccess: false,
        errors: {
          code: InternalCode.PROPERTY_IS_REQUIRED
        }
      }
    }
    return super.validate(value)
  }

  private _validateArray (value: unknown[]): boolean {
    return value.length === 0 || this._validateDefault(value[0])
  }

  private _validateDefault (value: unknown): boolean {
    // eslint-disable-next-line max-len
    if (this._checkValueNan) return value === null || value === undefined || String(value).trim() === '' || isNaN(value as number)
    return value === null || value === undefined || String(value).trim() === ''
  }

}

export { RequiredValidator }
