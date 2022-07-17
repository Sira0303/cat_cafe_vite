import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Map from '../views/MapPage.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/map',
        name: 'map',
        component: Map
    }, 
    {
        path: "/login", component: () => import("../views/LoginView.vue"),
    },
    {
        path: "/user_login", component: () => import("../views/LoginUser.vue"),
    },
    {
        path: "/shop_login", component: () => import("../views/LoginShop.vue"),
    },
    {
        path: "/user_signup", component: () => import("../views/SignupUser.vue"),
    },
    {
        path: "/shop_signup", component: () => import("../views/SignupShop.vue"),

    },
    {
        path: "/shop", component: () => import("../views/ShopView.vue"),
    },
    {
        path: "/user_signups", component: () => import("../views/SuserSignup.vue"),
    },
    {
        path: "/shop_signups", component: () => import("../views/SshopSignup.vue"),
    },
     {
        path: "/user_setting", component: () => import("../views/UserSetting.vue"),
    },
    {
        path: "/shop_setting", component: () => import("../views/ShopSetting.vue"),
    },
    {
        path: "/cart", component: () => import("../views/CartView.vue"),
    },
    {
        path: "/order", component: () => import("../views/OrderView.vue"),
    },
    {
        path: "/like", component: () => import("../views/LikeView.vue"),
    },
    {
        path: "/info", component: () => import("../views/InfoView.vue"),
    },
    {
        path: "/shop_info", component: () => import("../views/ShopInfo.vue"),
    },
    {
        path: "/shop_home_write", component: () => import("../views/ShopWrite.vue"),

    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router