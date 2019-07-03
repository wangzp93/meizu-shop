// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// axios
import axios from 'axios'

// 路由
import router from './router'

import {store} from './store'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 阿里矢量图标
import SvgIcon from './components/svg-icon'
Vue.component("svg-icon", SvgIcon)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
