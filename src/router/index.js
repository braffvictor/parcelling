import { createRouter, createWebHistory } from "vue-router";
import homepage from "../views/home-page.vue";
import aboutpage from "../views/about-page.vue";

const routes = [
  {
    path: "/",
    name: "home page",
    component: homepage,
    meta: {
      layout: "user",
    },
  },
  {
    path: "/about",
    name: "About Page",
    component: aboutpage,
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
  // component: () =>import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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
