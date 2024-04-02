import { createRouter, createWebHistory } from "vue-router";
import homepage from "../views/home-page.vue";
import aboutpage from "../views/about-page.vue";
import servicespage from "../views/services-page.vue";
import contactpage from "../views/contact-page.vue";
import gdprpage from "../views/gdpr-page.vue";
import carrierpage from "../views/carrier-page.vue";
import trackingpage from "../views/tracking-page.vue";
import registrationpage from "../views/registration-page.vue";
import loginpage from "../views/login-page.vue";

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
  {
    path: "/contact",
    name: "Contact",
    component: contactpage,
    meta: {
      layout: "user",
    },
  },
  {
    path: "/gdpr",
    name: "GDPR",
    component: gdprpage,
    meta: {
      layout: "user",
    },
  },
  {
    path: "/carrier",
    name: "Carrier",
    component: carrierpage,
    meta: {
      layout: "user",
    },
  },
  {
    path: "/tracking",
    name: "Tracking",
    component: trackingpage,
    meta: {
      layout: "user",
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/registration-page.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login-page.vue"),
    meta: {
      layout: "auth",
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
