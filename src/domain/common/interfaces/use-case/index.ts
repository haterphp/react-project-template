interface IUseCase<UseCasePort, UseCaseResult> {
  execute (port?: UseCasePort): Promise<UseCaseResult>
}

export type { IUseCase }
