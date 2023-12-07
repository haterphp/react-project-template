import { Exclude, Expose } from 'class-transformer'

import { ExceptionService } from '@domain/common/services'
import { ClassValidator } from '@domain/common/utils'

import { InternalCode } from '@data/common/enums'

import type { IEntity } from '../interfaces'

@Exclude()
abstract class Entity<Identifier extends string | number> implements IEntity<Identifier> {

  protected readonly _id: Identifier

  protected constructor (id: Identifier) {
    this._id = id
  }

  @Expose()
  get id (): Identifier {
    return this._id
  }

  @Exclude()
  protected async validate (): Promise<void> {
    const details = await ClassValidator.validate(this)

    if (details) {
      throw ExceptionService.new({
        status: {
          code: InternalCode.VALIDATION_ERROR,
          message: `${this.constructor.name} entity validation error`
        },
        data: details
      })
    }
  }

}

export { Entity }
