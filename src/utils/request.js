// 对 axios 进行封装
import axios from 'axios';
import { message } from 'antd';

const request = axios.create({
  baseURL: 'https://elm.cangdu.org',
  // 网络超时时间的设置 axios由默认的请求超时时间 设置时间短 当请求超时直接关闭 些用户体验较好
  timeout: 2 * 1000,
});

// 请求拦截
request.interceptors.request.use(
  // 请求成功
  config => {
    return config;
  },
  // 请求失败
  error => {
    return Promise.reject(error);
  },
);

// 响应拦截
request.interceptors.response.use(
  response => {
    // 统一做错误提示
    let result = response.data;
    if (result.code !== 0) {
      message.error(result.msg);
      // 直接调用 reject 让后续流程不再继续
      return Promise.reject(result.msg);
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
