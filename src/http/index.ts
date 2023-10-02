import axios from "axios";
import axiosRetry from "axios-retry";
import { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { generateSHA256Hash } from "@/utils/hash";
import { cancelTokenInfo, cancelUrl, indexUrls } from "@/interface/http";

const whiteRetry = new Set(["ECONNABORTED", undefined, 0]);
const config: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL, // 接口请求地址
  timeout: 5000, // 请求超时设置
  withCredentials: false, // 跨域请求是否需要携带 cookie
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  validateStatus(_status) {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true;
  },
};
// 创建 axios 请求实例
const serviceAxios = axios.create(config);

axiosRetry(serviceAxios, {
  retries: 2, // 重复请求次数
  shouldResetTimeout: true, //  重置超时时间
  retryDelay: (retryCount) => {
    return retryCount * 1000; // 重复请求延迟
  },
  retryCondition: (err) => {
    // true为打开自动发送请求，false为关闭自动发送请求
    const { code, message } = err;
    return whiteRetry.has(<string>code) || message.includes("timeout");
  },
});

// 请求拦截器
serviceAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  },
);

// 响应拦截器
serviceAxios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: AxiosError) => {
    if (err.code !== "ERR_CANCELED") {
      const url = err.config?.url;
      const index = cancelTokens.findIndex((tokenInfo) => tokenInfo.url === url);
      if (index !== -1) {
        const { source } = cancelTokens[index];
        source.cancel(`接口${url}已经被取消了,${url}`);
        cancelTokens.splice(index, 1);
      }
    }
    return Promise.reject(err);
  },
);

// 取消请求的取消令牌集合
const cancelTokens: cancelTokenInfo[] = [];
// 统一发起请求的函数
async function request<T>(options: AxiosRequestConfig) {
  try {
    const { url } = options;
    let response;
    // 生成取消令牌并添加到集合中
    if (url) {
      const source = axios.CancelToken.source();
      const tokenInfo: cancelTokenInfo = { url, source, flag: generateSHA256Hash() };
      cancelTokens.push(tokenInfo);
      response = await serviceAxios.request<T>({
        ...options,
        cancelToken: source.token,
      });
    } else {
      response = await serviceAxios.request<T>(options);
    }
    const { status, data } = response;
    // 处理 HTTP 状态码
    if (status < 200 || status >= 500) {
      return Promise.reject();
    }
    return Promise.resolve(data);
  } catch (error: any) {
    if (error.code === "ERR_CANCELED") {
      return Promise.resolve("接口取消");
    } else {
      return Promise.reject(error);
    }
  }
}
/**
 * 取消请求，默认空参清空全部。
 * @method cancelRequest
 * @param { String | String[] }  url 中断的接口名
 */
export function cancelRequest(url?: cancelUrl) {
  if (url) {
    const reversedTokens = [...cancelTokens].reverse();
    if (typeof url === "string") {
      url = [url];
    }
    const indexUrls: indexUrls[] = [];
    let findUrl = -1;
    url.forEach((item: string) => {
      reversedTokens.forEach((tokenInfo, tokenIndex) => {
        if (tokenInfo.url === item && tokenIndex > findUrl) {
          indexUrls.push([item, tokenIndex]);
          findUrl = tokenIndex;
        }
      });
    });
    if (indexUrls.length > 0) {
      indexUrls.forEach((index: indexUrls) => {
        const { source, flag } = reversedTokens[index[1]];
        source.cancel(`接口${index[0]}已经被取消了,${index[0]},${flag}`);
        // 获取实际数组中对应的索引
        const actualIndex = cancelTokens.length - 1 - index[1];
        return cancelTokens.splice(actualIndex, 1);
      });
    } else {
      return console.warn(`找不到指定请求${url}和标识符的取消令牌`);
    }
  } else {
    if (cancelTokens.length !== 0) {
      for (const tokenInfo of cancelTokens) {
        tokenInfo.source.cancel();
      }
      return (cancelTokens.length = 0); // 清空请求列表
    } else {
      return console.warn("没有正在请求的接口");
    }
  }
}
export default request;
