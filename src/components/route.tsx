
import { Route, Navigate, RouteProps } from 'react-router-dom'
import { RouteInterface, ElementOrComponent, getElement } from '../interface/route'
import { getToken } from '@/utils/authority';
import { generateSHA256Hash } from '@/utils/hash'
const RouteWithSubRoutes = (route: RouteInterface) => {
  const dealWithRoute = (route: RouteInterface, ElementOrComponent: ElementOrComponent, type: getElement) => {
    if (route.auth) {
      let toLogin;
      if (type === 1) {
        toLogin = <Navigate to='/login' />
      } else {
        toLogin = () => <Navigate to='/login' />
      }
      return getToken() ? toLogin : ElementOrComponent
    } else {
      return ElementOrComponent
    }
  }
  const elementDeal = (route: RouteInterface) => {
    const normalElement = route.element
    return dealWithRoute(route, normalElement, 1) as React.ReactNode | null
  }
  const componentDeal = (route: RouteInterface) => {
    const normalElement = route.Component
    return dealWithRoute(route, normalElement, 0) as React.ComponentType | null
  }
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
    Component: componentDeal(route),
    element: elementDeal(route),
  };
  if (route.children && route.children.length > 0) {
    return (
      <Route
        key={route.path || generateSHA256Hash()}
        index={route.index}
        {...routeProps}
      >
        {
          route.children.map((subRoute: RouteInterface) => {
            return RouteWithSubRoutes(subRoute)
          })
        }
      </Route>
    )
  } else {
    return (
      <Route
        key={route.path || generateSHA256Hash()}
        {...routeProps}
      />
    )
  }
}
export default RouteWithSubRoutes;