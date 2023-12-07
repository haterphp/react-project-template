import type { RouterPaths } from '@app/engine/router'

import type { IPipe } from '@domain/common/interfaces'

interface IRouterArgsPipePayload {
  path: RouterPaths
  replaceArgs: Record<string, string>
}

class RouterArgsPipe implements IPipe<IRouterArgsPipePayload, string> {

  public transform (data: IRouterArgsPipePayload): string {
    const { path, replaceArgs } = data

    return Object.entries(replaceArgs).reduce((acc, [k, v]) => {
      const r = new RegExp(`:${k}`, 'g')
      if (v !== undefined) return acc.replaceAll(r, v)
      return acc
    }, path as string)
  }

}

export { RouterArgsPipe }
