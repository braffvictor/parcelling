import { createStore } from "vuex";

export default createStore({
  state: {
    step: 20,
  },
  getters: {
    getStep: (state) => (value) => state[value],
  },
  mutations: {},
  actions: {},
  modules: {},
});
