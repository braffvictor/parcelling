import { createRouter, createWebHistory } from "vue-router";
import homepage from "../views/home-page.vue";
import aboutpage from "../views/about-page.vue";
import servicespage from "../views/services-page.vue";
import contactpage from "../views/contact-page.vue";
import gdprpage from "../views/gdpr-page.vue";
import carrierpage from "../views/carrier-page.vue";
import trackingpage from "../views/tracking-page.vue";

// this layout which the pages are based upon
import adminLayout from "../layouts/adminLayout.vue";
import userLayout from "../layouts/userLayout.vue";
import authLayout from "../layouts/authLayout.vue";
// import registrationpage from "../views/registration-page.vue";
// import loginpage from "../views/login-page.vue";

const routes = [
  //the default landing pages
  {
    path: "/user",
    name: "user",
    component: userLayout,
    // this meta property will be used to protect route or something like that....learn how
    // meta: {
    //   layout: "user",
    // },
    children: [
      {
        path: "/",
        name: "Home",
        component: homepage,
      },
      {
        path: "/services",
        name: "Services",
        component: servicespage,
      },
      {
        path: "/contact",
        name: "Contact",
        component: contactpage,
      },
      {
        path: "/gdpr",
        name: "GDPR",
        component: gdprpage,
      },
      {
        path: "/carrier",
        name: "Carrier",
        component: carrierpage,
      },
      {
        path: "/tracking",
        name: "Tracking",
        component: trackingpage,
      },
      {
        path: "/about",
        name: "About",
        component: aboutpage,
      },
    ],
  },

  //todo for authentication pages
  {
    path: "/auth",
    name: "Authentication",
    component: authLayout,
    children: [
      {
        path: "/register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/registration-page.vue"
          ),
      },
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/login-page.vue"),
      },
    ],
  },

  //todo for the admin pages
  {
    path: "/admin",
    name: "Admin Layout",
    component: adminLayout,

    children: [
      {
        path: "/admin/dashboard",
        name: "Test",
        component: () => import("../views/admin/dashboard-page.vue"),
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  // component: () =>import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //   meta: {
  // layout: "user",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
