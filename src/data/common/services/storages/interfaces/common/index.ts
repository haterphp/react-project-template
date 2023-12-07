interface IStorage<Name extends string> {
  get<Response> (name: Name): Response
  set<Payload> (name: Name, payload: Payload): void
  remove (name: Name): void
  clear (): void
}

export type { IStorage }
