import Vue from 'vue'
import axios from 'axios'

let $axios = axios.create({
    method: 'post',
    baseURL: process.env.BASE_API,
    timeout: 1000,
    failedCount: 0,// headers: {'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'},
    headers: {'Content-type': 'application/json;charset=UTF-8'},
    transformRequest: [function (data) {
        /* if (typeof data === "object") {
            let str = "", i = 0;
            for (let key in data) {
                if (i++ != 0) {
                    str += "&";
                }
                str += key + "=" + data[key];
            }
            return str;
        } */
        return JSON.stringify(data);
    }],
});
// 返回结果拦截器
$axios.interceptors.response.use(function (res) {
    if (res.status === 200) {
        return res.data;
    }
    return res;
}, function (err) {
    // easy-mock失败，请求本地json
    let config = err.config;
    let failedCount = config.failedCount || 0;
    if (failedCount > 3) {
        return;
    }
    failedCount++;
    config.failedCount = failedCount;
    config.url = config.url.replace(config.baseURL, "static/json/") + ".json";
    config.baseURL = "";
    config.method = "get";
    return $axios(config);
    /* if (err.response) {
        switch(err.response.status) {
            case 401:   // 密码错误
                break;
            case 403:   // 拒绝访问
                break;
            case 404:   // 地址错误
                break;
            case 500:   // 服务器错误
                break;
            case 503:   // 服务器繁忙
                break;
            case 504:   // 请求超时
                break;
        }
    } */
});
Object.defineProperty(Vue.prototype, "$axios", {
    value: $axios
});
