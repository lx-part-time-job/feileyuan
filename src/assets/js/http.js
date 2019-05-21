import axios from "axios";
import Vue from 'vue'
// import { SetCookies ,  GetCookies, DelCookies } from './../../../utils/setCookies.js'

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 10000;

axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    "Content-Type": "application/json;charset=utf-8"
};

axios.interceptors.request.use(
  config => {
    if (config.url.indexOf('?') >= 0) {
            config.url += ('&_t=' + new Date().getTime());
        } else {
            config.url += '?_t=' + new Date().getTime();
        }
        //token放到header里
        try {
            // let cookie = GetCookies('uInfo');
            let token = cookie ? JSON.parse(cookie).token : '';
            if(token){
                config.headers['token'] = token;
            }
        } catch(e) {
            console.log(e);
        }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "错误请求";
          break;
        case 401:
          err.message = "登录信息失效";
          break;
        case 403:
          err.message = "拒绝访问";
          break;
        case 404:
          err.message = "请求错误,未找到该资源";
          break;
        case 405:
          err.message = "请求方法未允许";
          break;
        case 408:
          err.message = "请求超时";
          break;
        case 500:
          err.message = "服务器端出错";
          break;
        case 501:
          err.message = "网络未实现";
          break;
        case 502:
          err.message = "网络错误";
          break;
        case 503:
          err.message = "服务不可用";
          break;
        case 504:
          err.message = "网络超时";
          break;
        case 505:
          err.message = "http版本不支持该请求";
          break;
        default:
          err.message = `连接错误${err.response.status}`;
      }
    } else {
      err.message = "连接到服务器失败";
    }
    return Promise.resolve(err.response);
  }
);
export default axios;