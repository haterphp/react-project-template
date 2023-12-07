import type { IStorage } from '../common'
import type { CookieValues } from '@data/common/enums'

interface ICookieService extends Omit<IStorage<CookieValues>, 'set' | 'remove'> {
  set<Payload> (name: CookieValues, payload: Payload, options?: ICookieOptions): void
  remove (name: CookieValues, options?: ICookieOptions): void
}

interface ICookieOptions {
  path?: string
  domain?: string
  expires?: Date | string | number
  maxAge?: number
  secure?: boolean
  sameSite?: SameSite
}

type SameSite = 'strict' | 'lax'

export type {
  ICookieService,
  ICookieOptions,
  SameSite
}
