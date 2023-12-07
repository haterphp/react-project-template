import type { PropsWithChildren } from 'react'

import './index.css'

const Content = (props: PropsWithChildren): JSX.Element => {
  return <div className="content">{ props.children }</div>
}

export { Content }
