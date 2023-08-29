import { CancelTokenSource } from "axios";
/**
 * 取消请求的取消令牌集合
 * @interface
 * @params {url} 接口url
 * @params {source} 令牌
 * @params {flag} 标识
 */
export interface cancelTokenInfo {
  url: string;
  source: CancelTokenSource;
  flag: string;
}

/**
 * @interface
 * @params {0} 接口url
 * @params {1} 所在的数组下标
 */
export interface indexUrls {
  0: string;
  1: number;
}
export type cancelUrl = string | string[];
