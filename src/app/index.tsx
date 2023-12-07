import { QueryClientProvider } from 'react-query'

import { AuthProvider } from './engine/auth'
import { RouterProvider } from './engine/router'

import { QUERY_CLIENT } from './query-client'

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={ QUERY_CLIENT }>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export { App }
