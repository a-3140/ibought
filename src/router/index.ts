import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Wants from '../views/Wants.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/wants',
    name: 'Wants',
    component: Wants,
    meta: { layout: LayoutDefault }
  },
  {
    path: '/stalled',
    name: 'Stalled',
    meta: { layout: LayoutDefault },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stalled.vue')
  },
  {
    path: '/allowed',
    name: 'Allowed',
    meta: { layout: LayoutDefault },
    component: () => import('../views/Allowed.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
