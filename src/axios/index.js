import Vue from 'vue'
import axios from 'axios'


// 返回结果拦截器
axios.interceptors.response.use(function (res) {
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

// axios.defaults.baseURL = 'https://easy-mock.com/mock/5d1b63a94e718016e83ba630/meizu-shop'

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
}
