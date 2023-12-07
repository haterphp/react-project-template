interface IDefaultPagePresenter {
  title: string
}

const useDefaultPagePresenter = (): IDefaultPagePresenter => {
  return { title: 'Project Place' }
}

export { useDefaultPagePresenter }
