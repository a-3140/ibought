import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Wants from "@/views/Authorized/Wants.vue";
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import LayoutMinimal from "@/layouts/LayoutMinimal.vue";
import store from "../store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/wants",
    name: "wants",
    alias: "/",
    component: Wants,
    meta: { layout: LayoutDefault, requiresAuth: true },
  },
  {
    path: "/logout",
    name: "logout",
    meta: { layout: LayoutMinimal, requiresAuth: true },
    component: () => import("@/views/Authorized/Logout.vue"),
  },
  {
    path: "*",
    redirect: "login",
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: LayoutMinimal },
    component: () => import("@/views/Unauthorized/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isUserLoggedIn = localStorage.getItem("access-token");

  // TODO: send a request to check if the access token is valid.

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isUserLoggedIn) {
      store.dispatch("logout");
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
