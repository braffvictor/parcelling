// firebase functions
import { db } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { createStore } from "vuex";

//for state management
import userflow from "./userflow";

export default createStore({
  state: {
    users: [],
  },
  getters: {
    getState: (state) => (value) => {
      return state[value];
    },
  },
  mutations: {
    setState(state, { type, value }) {
      state[type] = value;
    },
  },
  actions: {
    async initAllUsers({ commit, state }) {
      const colref = collection(db, "users");

      await getDocs(colref).then((docRefs) => {
        if (!docRefs.empty) {
          const arr = [];
          docRefs.forEach((docs) => {
            arr.push(docs.data());
          });

          commit("setState", { type: "users", value: arr });
        } else {
          userflow.dispatch({
            is: true,
            message: "No Data",
            type: "error",
            timer: 5000,
            close: true,
          });
        }
      });

      console.log(state.users);
    },

    initApp() {
      this.dispatch("initAllUsers");
    },
  },
  modules: {},
});
