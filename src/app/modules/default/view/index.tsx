import { useDefaultPagePresenter } from '../presenter'

const DefaultPage = (): JSX.Element => {
  const { title } = useDefaultPagePresenter()
  return (
    <h1 className="text-2xl py-4 text-center">{ title }</h1>
  )
}

export default DefaultPage
