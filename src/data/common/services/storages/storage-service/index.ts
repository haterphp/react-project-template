import { InternalCode } from '@data/common/enums'

import { ExceptionService } from '@domain/common/services'

import type { IStorage } from '../interfaces'

abstract class StorageService<Name extends string> implements IStorage<Name> {

  private _storage: Storage

  protected constructor (storage: Storage) {
    this._storage = storage
  }

  public get<Response> (name: Name): Response {
    const response = this._storage.getItem(name)

    if (response !== null) return JSON.parse(response) as Response

    throw ExceptionService.new({
      status: {
        code: InternalCode.PROPERTY_NOT_FOUND,
        message: `Property "${name}" not found in ${this.constructor.name}`
      }
    })
  }

  public set<Payload> (name: Name, payload: Payload): void {
    this._storage.setItem(name, JSON.stringify(payload))
  }

  public remove (name: Name): void {
    this._storage.removeItem(name)
  }

  public clear (): void {
    this._storage.clear()
  }

}

export { StorageService }
