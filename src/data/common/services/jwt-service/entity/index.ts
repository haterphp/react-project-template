import type { IJWTService, JWTResponse } from '../interfaces'

class JWTService implements IJWTService {

  public encode<Payload> (token: string): JWTResponse<Payload> {
    const radix = 16
    const slice = -2

    const payload = token.split('.')[1]
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/')
    const decoder = window.atob(base64).split('').map((c) => {
      return `%${`00${c.charCodeAt(0).toString(radix)}`.slice(slice)}`
    })

    const jsonPayload = decodeURIComponent(decoder.join(''))

    return JSON.parse(jsonPayload) as JWTResponse<Payload>
  }

}

export { JWTService }
