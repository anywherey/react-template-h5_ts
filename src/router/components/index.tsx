import { Route, RouteProps } from "react-router-dom";
import { routeInterface } from "@/interface/route";
import HOCdeal from "./HOC";
const RouteWithSubRoutes = (route: routeInterface, mainPath?: string) => {
  const wrappedComponent = HOCdeal(route, 0);
  const wrappedElement = HOCdeal(route, 1) as unknown as React.ReactNode | null;
  /**
   * @description 将Route组件的默认属性填入，不填入自定义的参数
   */
  const routeProps: RouteProps = {
    path: route.path,
    caseSensitive: route.caseSensitive,
    id: route.id,
    loader: route.loader,
    action: route.action,
    hasErrorBoundary: route.hasErrorBoundary,
    shouldRevalidate: route.shouldRevalidate,
    handle: route.handle,
    index: route.index,
    errorElement: route.errorElement,
    ErrorBoundary: route.ErrorBoundary,
    lazy: route.lazy,
    Component: wrappedComponent,
    element: wrappedElement,
  };
  const routePath = () => {
    if (mainPath && route.path) {
      return mainPath + route.path;
    } else if (mainPath && !route.path) {
      return mainPath;
    }
    return route.path;
  };
  if (route.children && route.children.length > 0) {
    return (
      <Route key={route.path} {...routeProps} index={false}>
        {route.children.map((subRoute: routeInterface) => {
          return RouteWithSubRoutes(subRoute, route.path);
        })}
      </Route>
    );
  } else {
    return <Route key={routePath()} {...routeProps} />;
  }
};
export default RouteWithSubRoutes;
