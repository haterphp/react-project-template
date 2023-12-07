/* eslint-disable import/no-anonymous-default-export */
import { StorageService } from '../storage-service'

import type { LocalStorageValues } from '@data/common/enums'
import type { IStorage } from '../interfaces'

class LocalStorageService
  extends StorageService<LocalStorageValues>
  implements IStorage<LocalStorageValues> {

  constructor () {
    super(localStorage)
  }

}

export default new LocalStorageService()
