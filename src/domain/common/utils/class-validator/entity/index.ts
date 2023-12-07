/* eslint-disable @typescript-eslint/no-extraneous-class */
import { validate } from 'class-validator'

import type { IClassValidationDetails } from '../interfaces'

import type { ValidationError } from 'class-validator'

class ClassValidator {

  public static async validate<Target extends object>(
    target: Target,
    context?: string
  ): Promise<IClassValidationDetails | undefined> {
    let details: IClassValidationDetails | undefined
    const errors: ValidationError[] = await validate(target)

    if (errors.length > 0) {
      details = {
        context: context ?? target.constructor.name,
        errors: []
      }

      for (const error of errors) {
        details.errors.push({
          property: error.property,
          message: error.constraints ? Object.values(error.constraints) : []
        })
      }
    }

    return details
  }

}

export { ClassValidator }
