/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMemo, type FC } from 'react'
import './index.css'

const AuthLoader: FC<{ isVisible: boolean; timeout: number }> = (props) => {
  const { isVisible, timeout } = props

  const className = useMemo(() => {
    const c = ['loader-wrapper']
    if (!isVisible) c.push('loader-wrapper__hidden')
    return c.join(' ')
  }, [isVisible])

  return (
    <div className={ className }
      style={{
      // @ts-expect-error
        '--timeout': `${timeout}ms`
      }}
    >
      <span className="loader" />
    </div>
  )
}

export { AuthLoader }
