
import { ElMessage } from "element-plus"
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import layout from "../views/layout/index.vue"
import Cookies from 'js-cookie'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "login",
        component: () => { return import("../views/login/index.vue") },

    },
    {
        path: "/",
        name: "layout",
        component: layout,
        children: [
            {
                path: "/home",
                name: "home",
                component: () => { return import("../views/home/index.vue") },

            },

        ]
    },

    {
        path: "/404",
        name: "404",

        component: () => { return import("../views/404/index.vue") },

    },
    {
        path: "/:cathchAll(.*)",
        // name: "404",
        redirect: "/404",
        // component: () => { return import("../views/404/index.vue") },

    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    console.log(to.path, "111");

    if (to.path == "/login") {
        next()
    } else {
        if (Cookies.get("Authorization") == "admin") {
            next()
        } else {
            next("/login")
            // ElMessage.error("请先登录")

        }
    }

})

export default router