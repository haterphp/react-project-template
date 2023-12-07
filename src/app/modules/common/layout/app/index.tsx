import { Outlet } from 'react-router-dom'

const ApplicationLayout = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  )
}

export default ApplicationLayout
