import { createRouter, createWebHistory } from "vue-router";
import homepage from "../views/home-page.vue";
import aboutpage from "../views/about-page.vue";
import servicespage from "../views/services-page.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: homepage,
    meta: {
      layout: "user",
    },
  },
  {
    path: "/about",
    name: "About",
    component: aboutpage,
    meta: {
      layout: "user",
    },
  },
  {
    path: "/services",
    name: "Services",
    component: servicespage,
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
