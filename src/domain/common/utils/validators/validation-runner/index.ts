import { ExceptionService } from '@domain/common/services'

import { InternalCode } from '@data/common/enums'

import type { IValidationError } from '../interfaces'

import type { ValidationChain } from '../validation-chain'

type IValidators<TPort> = Partial<Record<keyof TPort, ValidationChain>>

type IValidationErrors<TPort> = Partial<Record<keyof TPort, number | IValidationError['errors']>>

class ValidationRunner<TPort extends object, TValidationErrors extends IValidationErrors<TPort>> {

  private _validators: IValidators<TPort>

  private _shouldToGetFullResult: boolean = false

  constructor (validators: IValidators<TPort>, shouldToGetFullResult: boolean = false) {
    this._validators = validators
    this._shouldToGetFullResult = shouldToGetFullResult
  }

  public validate (port: TPort): void {
    const _errors: TValidationErrors = {} as TValidationErrors

    for (const [key, _] of Object.entries(this._validators) as [keyof TPort, unknown][]) {
      const _port = port[key]

      const _validator = this._validators[key]
      if (_validator) {
        const { isSuccess, errors } = _validator.run(_port)
        if (!isSuccess && errors !== undefined) {
          let _pushedValue: number | IValidationError['errors']

          if (this._shouldToGetFullResult) _pushedValue = errors
          else _pushedValue = errors.code

          _errors[key] = _pushedValue as TValidationErrors[keyof TPort]
        }
      }
    }

    if (Object.keys(_errors).length !== 0) {
      throw ExceptionService.new({
        status: {
          code: InternalCode.VALIDATION_ERROR,
          message: `Validation Errors in ${this.constructor.name}`
        },
        data: _errors
      })
    }
  }

}

export type { IValidators, IValidationErrors }
export { ValidationRunner }
