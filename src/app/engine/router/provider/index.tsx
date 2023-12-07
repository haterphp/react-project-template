/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RouterProvider as BaseRouterProvider } from 'react-router-dom'

import ROUTER from '../routes'

const RouterProvider = (): JSX.Element => {
  return <BaseRouterProvider router={ ROUTER } />
}

export { RouterProvider }
