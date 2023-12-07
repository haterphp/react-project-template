import type { IObserver } from '@domain/common/services'

import type { IEventPayload } from '../event-publisher'

interface IEventObserver<Data = unknown, Payload = IEventPayload<Data>> extends IObserver<Payload> {
  name: string

  update (payload?: Payload): Promise<void>
}

export type { IEventObserver }
