import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/browser',
            name: 'browser',
            component: () => import(/* webpackChunkName: "about" */ './views/Browser.vue')
        },
        {
            path: '/example1',
            name: 'example1',
            component: () => import(/* webpackChunkName: "about" */ './views/Example1.vue')
        },
        {
            path: '/example2',
            name: 'example2',
            component: () => import(/* webpackChunkName: "about" */ './views/Example2.vue')
        },
        {
            path: '/example3',
            name: 'example3',
            component: () => import(/* webpackChunkName: "about" */ './views/Example3.vue')
        },
        {
            path: '/example4',
            name: 'example4',
            component: () => import(/* webpackChunkName: "about" */ './views/Example4.vue')
        },
        {
            path: '/example5',
            name: 'example5',
            component: () => import(/* webpackChunkName: "about" */ './views/Example5.vue')
        },
        {
            path: '/example6',
            name: 'example6',
            component: () => import(/* webpackChunkName: "about" */ './views/Example6.vue')
        },
        {
            path: '/example7',
            name: 'example7',
            component: () => import(/* webpackChunkName: "about" */ './views/Example7.vue')
        },
        {
            path: '/example8',
            name: 'example8',
            component: () => import(/* webpackChunkName: "about" */ './views/Example8.vue')
        },
        {
            path: '/example9',
            name: 'example9',
            component: () => import(/* webpackChunkName: "about" */ './views/Example9.vue')
        },
        {
            path: '/example10',
            name: 'example10',
            component: () => import(/* webpackChunkName: "about" */ './views/Example10.vue')
        },
        {
            path: '/example11',
            name: 'example11',
            component: () => import(/* webpackChunkName: "about" */ './views/Example11.vue')
        },
        {
            path: '/example12',
            name: 'example12',
            component: () => import(/* webpackChunkName: "about" */ './views/Example12.vue')
        },
        {
            path: '/example13',
            name: 'example13',
            component: () => import(/* webpackChunkName: "about" */ './views/Example13.vue')
        }
    ]
})
