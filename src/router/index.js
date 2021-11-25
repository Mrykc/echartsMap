import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/index',
        name: 'index',
        redirect:'/home',
        component: () => import('../views/index.vue'),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/Home'),
            },
            {
                path: '/components',
                name: 'components',
                component: () => import('@/views/components/index'),
                children: [
                    {
                        path: '/map',
                        name: 'map',
                        component: () => import('@/views/components/Map')
                    },
                ]
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
