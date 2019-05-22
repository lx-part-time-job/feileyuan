import Vue from 'vue'
import Router from 'vue-router'

import Default from './layout/default'
import noFooter from './layout/noFooter'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // }, {
        //     path: '/infomation',
        //     name: 'Infomation',
        //     component: resolve => require(["./views/home/information"], resolve)
        // },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: Login
        // },
        {
            path: '/',
            component: Default,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('./views/home/index.vue'), 
                },
                {
                    path: 'infomation',
                    name: 'infomation',
                    component: () => import('./views/home/information.vue'), 
                }
            ]
        },
        {
            path:'/',
            component: noFooter,
            children:[
                {
                    path:'/login',
                    name:'login',
                    component: () => import('./views/user/login.vue')
                }
            ]
        }
    ]
})