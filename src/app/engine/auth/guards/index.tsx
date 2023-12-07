/* eslint-disable no-negated-condition */
import { deepmerge } from 'deepmerge-ts'

import type { ReactElement } from 'react'

import type { User } from '../context'

type ReturnElement = JSX.Element | null

interface IGuardOptions {
  failureState?: ReturnElement
}

interface IAuthGuardOptions extends IGuardOptions {
  roles?: string[] | null
}

interface IAuthGuards {
  isAuth(content: ReactElement, options: IAuthGuardOptions): ReturnElement
  isGuest(content: ReactElement, options?: IGuardOptions): ReturnElement
}

const DEFAULT_GUARD_OPTIONS: Required<IGuardOptions> = {
  failureState: null
}

const DEFAULT_AUTH_GUARD_OPTIONS: Required<IAuthGuardOptions> = {
  ...DEFAULT_GUARD_OPTIONS,
  roles: null
}

const useGuards = (user: User): IAuthGuards => {
  const isAuth: IAuthGuards['isAuth'] = (content, options) => {
    const { failureState, roles } = deepmerge(DEFAULT_AUTH_GUARD_OPTIONS, options) as Required<IAuthGuardOptions>

    if (roles) {
      if (user !== null && roles.includes(user.role)) return content
      return failureState
    }

    return user !== null ? content : failureState
  }

  const isGuest: IAuthGuards['isGuest'] = (content, options = {}) => {
    const { failureState } = deepmerge(DEFAULT_GUARD_OPTIONS, options) as Required<IGuardOptions>
    return user !== null ? failureState : content
  }

  return {
    isAuth,
    isGuest,
  }
}

export { useGuards }
export type { IAuthGuards }
