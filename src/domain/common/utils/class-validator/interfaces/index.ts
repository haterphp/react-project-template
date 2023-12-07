interface IClassValidationDetails {
  context: string
  errors: IClassValidationErrors[]
}

interface IClassValidationErrors {
  property: string
  message: string[]
}

export type { IClassValidationDetails }
