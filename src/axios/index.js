import Vue from 'vue'
import axios from 'axios'

let $axios = axios.create({
    method: 'post',
    baseURL: process.env.BASE_API,
    // timeout: 1000,
    // "Content-Type": "application/json",
    transformRequest: [function (data) {
        if (typeof data === "object") {
            let str = "", i = 0;
            for (let key in data) {
                if (i++ != 0) {
                    str += "&";
                }
                str += key + "=" + data[key];
            }
            return str;
        }
        return data;
    }],
});
$axios.interceptors.response.use(function (res) {
    if (res.status === 200) {
        return res.data;
    }
    return res;
}, function (err) {
    if (err.request) {
        let req = err.request;
        // easy-mock失败，请求本地json
        let config = err.config;
        config.url = config.url.replace(config.baseURL, "static/json/") + ".json";
        config.baseURL = "";
        config.method = "get";
        return $axios(config);
    }
    return Promise.reject(err);
});
Object.defineProperty(Vue.prototype, "$axios", {
    value: $axios
});

// 返回结果拦截器
/* axios.interceptors.response.use(function (res) {
    if (res.status === 200) {
        return res.data;
    }
    return res;
}, function (err) {
    if (err.request) {
        let req = err.request;
        // easy-mock失败，请求本地json
        let config = err.config;
        config.url = config.url.replace(config.baseURL, "static/json/") + ".json";
        config.baseURL = "";
        config.method = "get";
        return axios(config);
    }
    // return Promise.reject(err);
});
Vue.prototype.$axios = function(obj) {
    // 根据不同环境取不同地址
    const baseURL = process.env.BASE_API;
    return axios({
        method: 'post',
        baseURL,
        timeout: 1000,
        transformRequest: [function (data) {
            return JSON.stringify(data);
        }],
        ...obj
    });
} */
