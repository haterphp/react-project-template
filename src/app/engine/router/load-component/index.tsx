import { Suspense, memo } from 'react'

import type { FC, NamedExoticComponent } from 'react'

// eslint-disable-next-line react/display-name
const LoadComponent = <Props extends object,>(Component: FC<Props>): NamedExoticComponent<Props> => memo((props) => (
  <Suspense fallback={ <div /> }>
    <Component { ...props } />
  </Suspense>
))

export { LoadComponent }
