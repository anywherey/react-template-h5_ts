import { Route, RouteProps } from "react-router-dom";
import { routeInterface } from "@/interface/route";
import { generateSHA256Hash } from "@/utils/hash";
import HOCdeal from "./HOC";
const RouteWithSubRoutes = (route: routeInterface) => {
  const wrappedComponent = HOCdeal(route, 0) as React.ComponentType | null;
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
    errorElement: route.errorElement,
    ErrorBoundary: route.ErrorBoundary,
    lazy: route.lazy,
    Component: wrappedComponent,
    element: wrappedElement,
  };
  if (route.children && route.children.length > 0) {
    return (
      <Route key={route.path} index={route.index} {...routeProps}>
        {route.children.map((subRoute: routeInterface) => {
          return RouteWithSubRoutes(subRoute);
        })}
      </Route>
    );
  } else {
    return <Route key={route.path} {...routeProps} />;
  }
};
export default RouteWithSubRoutes;
