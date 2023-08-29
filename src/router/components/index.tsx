import { Route, RouteProps } from "react-router-dom";
import { routeInterface } from "@/interface/route";
import { generateSHA256Hash } from "@/utils/hash";
import HOCdeal from "./HOC";
const RouteWithSubRoutes = (route: routeInterface) => {
  const WrappedComponent = HOCdeal(route, 0) as React.ComponentType | null;
  const WrappedElement = HOCdeal(route, 1) as unknown as React.ReactNode | null;
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
    Component: WrappedComponent,
    element: WrappedElement,
  };
  if (route.children && route.children.length > 0) {
    return (
      <Route key={route.path || generateSHA256Hash()} index={route.index} {...routeProps}>
        {route.children.map((subRoute: routeInterface) => {
          return RouteWithSubRoutes(subRoute);
        })}
      </Route>
    );
  } else {
    return <Route key={route.path || generateSHA256Hash()} {...routeProps} />;
  }
};
export default RouteWithSubRoutes;
