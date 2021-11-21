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
