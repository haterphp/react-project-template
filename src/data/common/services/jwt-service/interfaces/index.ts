type JWTResponse<Payload> = Payload & { exp: string }

interface IJWTService {
  encode<Payload> (token: string): JWTResponse<Payload>
}

export type {
  JWTResponse,
  IJWTService
}
