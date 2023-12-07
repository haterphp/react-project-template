interface IPipe<TData, TResult> {
  transform(data: TData): TResult
}

export type { IPipe }
