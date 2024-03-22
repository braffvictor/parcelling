import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: {
      layout: "user",
    },
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () =>import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //   meta: {
  //     layout: "user",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
