import type { IPipe } from '@domain/common/interfaces'

interface IMessagePipePayload {
  message: string
  replaceArgs: Record<string, string>
}

class MessagePipe implements IPipe<IMessagePipePayload, string> {

  public transform (data: IMessagePipePayload): string {
    const { message, replaceArgs } = data

    return Object.entries(replaceArgs).reduce((acc, [k, v]) => {
      const r = new RegExp(`{{${k}}}`, 'g')
      if (v !== undefined) return acc.replaceAll(r, v)
      return acc
    }, message)
  }

}

export { MessagePipe }
