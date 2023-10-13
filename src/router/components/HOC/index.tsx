import { routeInterface, getElement } from "@/interface/route";
import { getToken } from "@/utils/authority";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cancelRequest } from "@/http";
function HOCdeal(route: routeInterface, getElement: getElement) {
  return function AuthCheckWrapper() {
    const location = useLocation();
    const navigate = useNavigate();
    /* 在路由切换时的处理 */
    useEffect(() => {
      if (!route.children && route.path && route.path != "") {
        cancelRequest();
      }
      if (getToken() && route.path && route.path.indexOf("login") === 1) {
        navigate("/", { replace: true });
      }
      if (route.auth && !getToken()) {
        navigate(`/login${route.path}`, { replace: true });
      }
    }, [location]);

    /* 权限判断 */
    /* 默认返回 */
    switch (getElement) {
      case 0:
        return route.Component ? <route.Component /> : null;
      case 1:
        return route.element;
      default:
        return null;
    }
  };
}
export default HOCdeal;
