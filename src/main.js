import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import userflow from "./store/userflow";
import adminflow from "./store/adminflow";
import authentication from "./store/authentication";

import vuetify from "@/plugins/vuetify";
import "./registerServiceWorker";

// console.log(userflow);
// console.log(adminflow);

createApp(App)
  .use(userflow)
  .use(adminflow)
  .use(authentication)
  .use(router)
  .use(vuetify)
  .mount("#app");
