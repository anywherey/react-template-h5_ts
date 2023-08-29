import { routeInterface, getElement } from "@/interface/route";
import { getToken } from "@/utils/authority";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { cancelRequest } from "@/http";
function HOCdeal(route: routeInterface, getElement: getElement) {
  return function AuthCheckWrapper() {
    const location = useLocation();
    /* 在路由切换时的处理 */
    useEffect(() => {
      if (!route.children) {
        console.log(location);
        cancelRequest();
      }
    }, [location]);

    /* 权限判断 */
    if (route.auth && !getToken()) {
      return <Navigate to="/login" replace />;
    }
    /* 默认返回 */
    switch (getElement) {
      case 0:
        return route.Component ? <route.Component /> : null;
      case 1:
        return route.element ? route.element : null;
      default:
        return null;
    }
  };
}
export default HOCdeal;
