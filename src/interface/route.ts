import { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";
export type permissions = Array<string>;
// 增加内容接口
interface newRouteObject {
  auth?: boolean;
  permissions?: permissions;
  element?: React.ReactNode | null;
}
// 修改原有IndexRouteObject接口
interface extendedIndexRouteObject extends IndexRouteObject, newRouteObject {}
// 修改原有NonIndexRouteObject接口
interface extendedNonIndexRouteObject extends NonIndexRouteObject, newRouteObject {}

export type routeInterface = extendedIndexRouteObject | extendedNonIndexRouteObject;
/**
 *  判断路由处理中是element还是component
 *  @param {0|1}   0是component,1是element
 */
export type getElement = 0 | 1;
