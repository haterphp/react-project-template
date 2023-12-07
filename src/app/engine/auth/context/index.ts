import { createContext, useContext, type Dispatch, type SetStateAction } from 'react'

import { type IAuthGuards } from '../guards'

import type { IUserEntity } from '@domain/users/interfaces'

type User = IUserEntity | null

interface IAuthContext {
  user: User
  setUser: Dispatch<SetStateAction<User>>
  guards: IAuthGuards
}

const DEFAULT_VALUES: IAuthContext = {
  user: null,
  setUser: () => {
    //
  },
  guards: {
    isAuth: (content) => content,
    isGuest: (content) => content,
  }
}

const AuthContext = createContext(DEFAULT_VALUES)
const useAuth = (): IAuthContext => useContext(AuthContext)

export type { User, IAuthContext }
export { AuthContext, useAuth }
