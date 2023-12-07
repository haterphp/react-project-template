/* eslint-disable @typescript-eslint/no-magic-numbers */
import { useQuery, type UseQueryResult } from 'react-query'

import type { Dispatch, SetStateAction } from 'react'

import type { User } from '../context'

interface IUseLoadUserProps {
  setUser: Dispatch<SetStateAction<User>>
}

type IUseLoadUserResult = UseQueryResult<null>

const useLoadUserRequest = (props: IUseLoadUserProps): IUseLoadUserResult => {
  const { setUser } = props

  const callback = async (): Promise<null> => {
    return new Promise((res) => {
      setTimeout(() => {
        res(null)
      }, 1500)
    })
  }

  const options = {
    onSuccess: (payload: null): void => {
      if (payload === null) {
        setUser(null)
      }
      // SetUser(new UserEntity(payload))
    },
    onError: (): void => {
      setUser(null)
    }
  }

  return useQuery(['load user data'], callback, options)
}

export { useLoadUserRequest }
