import Vue from 'vue'
import App from './App.vue'

//路由
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter);

// 阿里矢量图标
import SvgIcon from './components/svg-icon'
Vue.component("svg-icon", SvgIcon);


const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return {x: 0, y: 0};
		}
	}
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
