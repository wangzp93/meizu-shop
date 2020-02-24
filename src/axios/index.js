import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://easy-mock.com/mock/5d1b63a94e718016e83ba630/meizu-shop'

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.status === 200) {
        return response.data;
    }
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
Vue.prototype.$axios = function(obj) {
    return axios({
        method: 'post',
        baseURL: 'https://easy-mock.com/mock/5d1b63a94e718016e83ba630/meizu-shop/',
        transformRequest: [function (data) {
            // 可以在此处加loading

            return data;
        }],
        ...obj
    });
}
