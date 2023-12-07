import { PublisherService } from '@domain/common/services'

import type { IEventObserver } from '../event-observer'

interface IEventPayload<T = unknown> {
  name: string
  data?: T
}

class EventPublisher extends PublisherService<IEventObserver, IEventPayload> {

  // Public override unsubscribe (observer: IEventObserver): void {
  //   This._observers = this._observers.filter((item) => item.name !== observer.name)
  // }

  public override async notify (payload: IEventPayload): Promise<void> {
    const observer = this._observers.filter((tt) => tt.name === payload.name)

    observer.forEach((item) => {
      void item.update(payload)
    })

    await Promise.resolve()
  }

}

export { EventPublisher }
export type { IEventPayload }
