import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Wants from "@/views/Wants.vue";
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import LayoutMinimal from "@/layouts/LayoutMinimal.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/wants",
    name: "wants",
    alias: "/",
    component: Wants,
    meta: { layout: LayoutDefault },
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: LayoutMinimal },
    component: () => import('@/views/Login.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
