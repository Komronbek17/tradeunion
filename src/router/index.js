import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppLoginPage from "../views/AppLoginPage";
import AppUserViewInfo from "../views/AppUserViewInfo";
import {authHeader} from "../features/authHeader";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            layout: 'AppDashboard'
        }
    },
    {
        path: '/user/view/:id',
        name: 'user-info',
        component: AppUserViewInfo,
        meta: {
            layout: 'AppDashboard'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: AppLoginPage,
        meta: {
            layout: 'AppLayoutDefault'
        }
    },
    // {
    //   path: '/about',
    //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name === "login" || from.name === "login") {
        next();
    } else {
        const AUTH_TOKEN = authHeader()
        if (!AUTH_TOKEN) {
            next({name: "login"});
        }
        next();
    }
});

export default router
