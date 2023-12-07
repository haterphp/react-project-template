import { Exclude, Expose } from 'class-transformer'

import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator'

import { Entity } from '@domain/common/entity'

import type { ICreateUserEntityPayload, IUserEntity, UserIdentifier } from '../interfaces'

@Exclude()
class UserEntity extends Entity<UserIdentifier> implements IUserEntity {

  @IsString()
  private _name: string

  @IsString()
  private _surname: string

  @IsOptional()
  @IsString()
  private _middleName?: string

  @IsString()
  @IsPhoneNumber()
  private _phone: string

  @IsString()
  @IsEmail()
  private _email: string

  @IsString()
  private _role: string

  private constructor (payload: ICreateUserEntityPayload) {
    super(payload.id)

    this._name = payload.name
    this._surname = payload.surname
    this._middleName = payload.middleName
    this._phone = payload.phone
    this._email = payload.email
    this._role = payload.role
  }

  @Expose()
  get name (): string {
    return this._name
  }

  @Expose()
  get surname (): string {
    return this._surname
  }

  @Expose()
  get middleName (): string | undefined {
    return this._middleName
  }

  @Expose()
  get fullName (): string {
    if (this._middleName !== undefined)
      return [this._surname, this._name, this._middleName].join(' ')
    return [this._surname, this._name].join(' ')
  }

  @Expose()
  get phone (): string {
    return this._phone
  }

  @Expose()
  get email (): string {
    return this._email
  }

  @Expose()
  get role (): string {
    return this._role
  }

  public static async new (payload: ICreateUserEntityPayload): Promise<UserEntity> {
    const entity = new UserEntity(payload)
    await entity.validate()
    return entity
  }

}

export { UserEntity }
