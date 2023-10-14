import { routeInterface } from "@/interface/route";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import dynamicRoutes from "./routes/dynamicRoutes";
// 也可以用route里的lazy属性(注意：该属性不支持createBrowserRouter方式创建的路由）
const page1 = lazy(() => import(/* webpackChunkName:"Page1" */ "@/view/page1/page1"));
const notfound = lazy(() => import(/* webpackChunkName:"NotFound" */ "@/view/notfound/index"));
const login = lazy(() => import(/* webpackChunkName:"Login" */ "@/view/login/index"));
const layout = lazy(() => import(/* webpackChunkName:"Layout" */ "@/view/layout/index"));
const home = lazy(() => import(/* webpackChunkName:"Home" */ "@/view/home/index"));
const community = lazy(() => import(/* webpackChunkName:"Community" */ "@/view/community/index"));
const my = lazy(() => import(/* webpackChunkName:"My" */ "@/view/my/index"));

// 放弃element属性,会影响性能，源于官网
// You should only opt into the Component API for data routes via RouterProvider.
// Using this API on a <Route> inside <Routes> will de-optimize
// React's ability to reuse the created element across renders.
const children: routeInterface[] = [
  {
    path: "*",
    Component: notfound,
  },
  {
    path: "/login/:from",
    Component: login,
  },
  {
    path: "/",
    Component: layout,
    children: [
      {
        index: true,
        Component: home,
      },
      {
        path: "community",
        Component: community,
      },
      {
        path: "my",
        Component: my,
      },
    ],
  },
  {
    path: "/page1",
    Component: page1,
  },
  {
    path: "/page2",
    Component: page1,
    auth: true,
  },
  ...dynamicRoutes,
];

export default children;
