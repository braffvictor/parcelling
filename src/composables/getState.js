/* eslint-disable */
import adminflow from "../store/adminflow.js";
import userflow from "../store/userflow.js";

import { reactive } from "vue";

export function getState(store, state) {
  const stores = reactive({
    adminflow: adminflow,
    userflow: userflow,
  });

  async function getter() {
    return await stores[store].getters.getState(state);
  }

  return {
    state: getter(),
  };
}
