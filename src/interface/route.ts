import { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";
export type permissions = Array<string>;
// 增加内容接口
interface newRouteObject {
  auth?: boolean; //权限
  permissions?: permissions; //权限
}
// 修改原有IndexRouteObject接口
interface extendedIndexRouteObject extends Omit<IndexRouteObject, "element">, newRouteObject {
  element?: null; // 将 element 属性设置为 null
}

// 修改原有NonIndexRouteObject接口
interface extendedNonIndexRouteObject extends Omit<NonIndexRouteObject, "element">, newRouteObject {
  element?: null; // 将 element 属性设置为 null
}
export type routeInterface = extendedIndexRouteObject | extendedNonIndexRouteObject;
/**
 *  判断路由处理中是element还是component
 *  @param {0|1}   0是component,1是element
 */
export type getElement = 0 | 1;
