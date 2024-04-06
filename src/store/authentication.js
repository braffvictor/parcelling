import { createStore } from "vuex";
import router from "@/router";

//firestore functions
import { db, auth } from "@/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

//composable
import { formatDate } from "../composables/forDate";
const { date } = formatDate("format");

//state management
import userflow from "./userflow";

export default createStore({
  state: {
    user: null,

    loading: {
      register: false,
    },
  },

  getters: {
    getLoading(state) {
      return state.loading;
    },
  },

  mutations: {
    setLoading(state, { type, is }) {
      state.loading[type] = is;
    },
  },

  actions: {
    async registerUser({ commit }, payload) {
      commit("setLoading", { type: "register", is: true });

      await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      )
        .then(async (cred) => {
          const currentUser = doc(db, "users", cred.user.uid);

          await setDoc(currentUser, {
            userID: cred.user.uid,
            fullName: `${payload.firstName} ${payload.lastName}`,
            email: payload.email,
            password: payload.password,

            //extra data
            role: "admin",
            joinDate: date,
          })
            .then(() => {
              userflow.dispatch("initAlert", {
                is: true,
                type: "success",
                message: "Account Created Successfully",
                timer: 4000,
              });

              router.push("/admin/dashboard");

              commit("setLoading", { type: "register", is: false });
            })
            .catch((error) => {
              console.log(error);
              userflow.dispatch("initAlert", {
                is: true,
                type: "error",
                message: error.code,
              });
            });
          commit("setLoading", { type: "register", is: false });
        })
        .catch((error) => {
          console.log(error);
          userflow.dispatch("initAlert", {
            is: true,
            type: "error",
            message: error.code,
            timer: 7000,
          });
          commit("setLoading", { type: "register", is: false });
        });
    },
  },
});
