import type { IEntity } from '@domain/common/entity'

type UserIdentifier = string

interface ICreateUserEntityPayload {
  id: UserIdentifier
  name: string
  surname: string
  middleName?: string
  phone: string
  email: string
  role: string
}

interface IUserEntity extends IEntity<UserIdentifier> {
  name: string
  surname: string
  middleName?: string
  fullName: string

  phone: string
  email: string

  role: string
}

export type { IUserEntity, UserIdentifier, ICreateUserEntityPayload }
