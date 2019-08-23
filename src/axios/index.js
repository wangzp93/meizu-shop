import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

axios.defaults.baseURL = 'https://easy-mock.com/mock/5d1b63a94e718016e83ba630/meizu-shop'
