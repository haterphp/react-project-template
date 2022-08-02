import {createContext, FC, useContext, useState} from "react";
import {BrowserRouter, Navigate, Outlet, RouteObject, useRoutes} from "react-router-dom";
import {useAuthContext} from "./auth";
import {Suspense} from "react";

/**
 * Router provider
 */

type RouterProps = {
    routes: RouteObject[]
}

const MakeRoutes: FC<Pick<RouterProps, 'routes'>> = ({routes}) => <>{useRoutes(routes)}</>

const RouterProvider: FC<RouterProps> = ({routes}) => {

    return (
        <BrowserRouter>
                <MakeRoutes routes={routes}/>
        </BrowserRouter>
    )
}

export default RouterProvider

/**
 * Route guards
 */

const AuthGuard: FC<{ navigateToFail?: string }> = ({navigateToFail = '/'}) => {
    const {isAuth} = useAuthContext();
    if(isAuth) return <Outlet/>;
    return <Navigate to={navigateToFail}/>;
}

const RoleGuard: FC<{ role: string | string[], navigateToFail?: string }> = ({ role, navigateToFail = "/" }) => {
    const {user} = useAuthContext();
    if(user && [role].flat().includes(user.role)) return <Outlet/>
    return <Navigate to={navigateToFail} />
}

const GuestGuard: FC = () => {
    return <Outlet/>;
}

export const Guards = {
    GuestGuard,
    AuthGuard,
    RoleGuard
};

/**
 * Lazy loading components
 *
 * @param Component
 * @constructor
 */

export const LoadComponent = (Component: FC) => (props: any) => (
    <Suspense fallback={<></>}>
        <Component {...props} />
    </Suspense>
)
