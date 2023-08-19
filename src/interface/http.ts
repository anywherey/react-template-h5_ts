import {CancelTokenSource} from 'axios';
// 取消请求的取消令牌集合
export interface CancelTokenInfo {
    url: string;
    source: CancelTokenSource;
    flag: string; //标识
}

