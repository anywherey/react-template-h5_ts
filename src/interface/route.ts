import {IndexRouteObject, NonIndexRouteObject,RouteProps} from 'react-router-dom';
export type permissions = Array<string>;
// 增加内容接口
interface newRouteObject {
    auth?: boolean;
    permissions?: permissions;
}
// 修改原有IndexRouteObject接口
interface extendedIndexRouteObject extends IndexRouteObject, newRouteObject {}
// 修改原有NonIndexRouteObject接口
interface extendedNonIndexRouteObject extends NonIndexRouteObject, newRouteObject {}

export type ElementOrComponent  = React.ReactNode| React.ComponentType;
export type getElement=0|1
export type RouteInterface = extendedIndexRouteObject | extendedNonIndexRouteObject;
