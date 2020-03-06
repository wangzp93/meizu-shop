import Vue from 'vue'
import axios from 'axios'


// 返回结果拦截器
axios.interceptors.response.use(function (response) {
    if (response.status === 200) {
        return response.data;
    }
    return response;
}, function (error) {
    return Promise.reject(error);
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
