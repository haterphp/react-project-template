import {LoadComponent} from "@core/router";
import {lazy} from "react";
import {RouteObject} from "react-router-dom";

const IndexPage = LoadComponent(lazy(() => import('@pages/index')));

export default [
    { path: "/", element: <IndexPage/> }
] as RouteObject[];
