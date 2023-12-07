import { lazy } from 'react'

import { LoadComponent } from '@app/engine/router/load-component'

import { RouterPaths } from '@app/engine/router'

import type { RouteObject } from 'react-router-dom'

/**
 * Layouts
 */
const ApplicationLayout = LoadComponent(lazy(async () => import('../common/layout/app')))

/**
 * Pages
 */
const DefaultPage = LoadComponent(lazy(async () => import('./view')))

export const DEFAULT_PAGE: RouteObject = {
  path: '',
  element: <ApplicationLayout />,
  children: [
    { path: RouterPaths.DEFAULT, element: <DefaultPage /> }
  ]
}
