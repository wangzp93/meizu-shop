import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: "history",
    base: "/meizu-shop/",
    routes: [
        {path: "/home", name: "home", component: ()=> import('@/views/Home') },
        {path: "/category", name: "category", component: ()=> import('@/views/Category'), redirect: "/category/phone", children: [
            {path: "phone", name: "phone", component: ()=> import('@/components/category/phone')},
            {path: "audio", name: "audio", component: ()=> import('@/components/category/audio')},
            {path: "section", name: "section", component: ()=> import('@/components/category/section')},
            {path: "surround", name: "surround", component: ()=> import('@/components/category/surround')},
        ]},
        {path: "/find", name: "find", component: ()=> import('@/views/Find')},
        {path: "/cart", name: "cart", component: ()=> import('@/views/Cart')},
        {path: "/me", name: "me", component: ()=> import('@/views/Me')},
        {path: "*", redirect: "/home"}
    ]
})
