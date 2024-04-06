import { createStore } from "vuex";

/* eslint-disable */

export default createStore({
  state: {
    alert: {
      is: false,
      message: "",
      type: "success",
      close: false,
      timer: null,
    },
  },
  getters: {
    getAlert(state) {
      return state.alert;
    },
  },
  mutations: {
    setAlert(state, { message, close, type, is, timer }) {
      state.alert.is = is;
      state.alert.message = message;
      state.alert.close = close;
      state.alert.type = type;
      state.alert.timer = timer;
    },
  },
  actions: {
    initAlert({ commit }, { message, is, type, close, timer }) {
      commit("setAlert", {
        message: message,
        is: is,
        type: type,
        close: close || false,
        timer: timer,
      });

      setTimeout(
        () => {
          commit("setAlert", {
            is: false,
            message: message,
            type: type,
            close: close || false,
            timer: timer,
          });
        },
        timer ? timer : 4000
      );
    },
  },
  modules: {},
});
