import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: "history",
    base: "/meizu-shop/",
    routes: [
        {path: "/home", component: ()=> import('@/views/Home'), name: "home" },
        {path: "/category", component: ()=> import('@/views/Category'), name: "category"},
        {path: "/find", component: ()=> import('@/views/Find'), name: "find"},
        {path: "/cart", component: ()=> import('@/views/Cart'), name: "cart"},
        {path: "/me", component: ()=> import('@/views/Me'), name: "me"},
        {path: "/", redirect: "/home"}
    ]
})
