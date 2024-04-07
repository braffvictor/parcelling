/* eslint-disable */
import adminflow from "../store/adminflow.js";
import userflow from "../store/userflow.js";
import authentication from "../store/authentication.js";

import { reactive } from "vue";

export function getState(store, state) {
  function getter() {
    console.log(state);
    console.log(adminflow);
    console.log(userflow);
  }

  return {
    state: getter(),
  };
}
