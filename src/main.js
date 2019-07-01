// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

//路由
import router from './router'

// axios
import axios from 'axios'
Vue.prototype.$axios = axios

// Vue.use(VueRouter);

Vue.config.productionTip = false

// 阿里矢量图标
import SvgIcon from './components/svg-icon'
Vue.component("svg-icon", SvgIcon)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
