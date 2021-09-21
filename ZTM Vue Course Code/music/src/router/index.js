import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";
import Song from "@/components/Song.vue";

import store from "@/store";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    // alias: "/manage",
    path: "/manage-music",
    meta: {
      requiresAuth: true,
    },
    component: Manage,
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  {
    name: "song",
    path: "/song/:id",
    component: Song,
  },
  { path: "/manage", redirect: { name: "manage" } }, // redirect old path to new path
  { path: "/:catchAll(.*)*", redirect: { name: "home" } }, // redirect random page
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

// Global Guard
router.beforeEach((to, from, next) => {
  // console.log("Global Guard");
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }
  if (store.state.auth.isAuthenticated) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
