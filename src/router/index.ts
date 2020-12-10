import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";

import { auth } from "@/firebase/firebase";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;
