import { useEffect, useMemo, useState } from 'react'

import { AuthContext, type User } from '../context'

import { useLoadUserRequest } from '../request'

import { AuthLoader } from '../components/loader'

import { useGuards } from '../guards'

import { Content } from '../components/content'

import type { PropsWithChildren } from 'react'

interface IAuthProviderProps extends PropsWithChildren {}

const TIMEOUT = 500

const AuthProvider = (props: IAuthProviderProps): JSX.Element => {
  const { children } = props

  const [isGlobalLoading, setIsGlobalLoading] = useState(true)
  const [user, setUser] = useState<User>(null)
  const guards = useGuards(user)

  const context = useMemo(() => ({
    user,
    setUser,
    guards
  }), [
    user,
    setUser,
    guards
  ])

  const { isLoading } = useLoadUserRequest({ setUser })

  useEffect(() => {
    if (isLoading === false) {
      setTimeout(() => {
        setIsGlobalLoading(false)
      }, TIMEOUT)
    }
  }, [isLoading])

  return (
    <AuthContext.Provider value={ context }>
      { isGlobalLoading
        ? <AuthLoader isVisible={ isLoading } timeout={ TIMEOUT } />
        : <Content>{ children }</Content> }
    </AuthContext.Provider>
  )
}

export { AuthProvider }
