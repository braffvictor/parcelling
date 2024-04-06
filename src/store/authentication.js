import { createStore } from "vuex";

//imported the router file to use its functions
import router from "@/router";

//firestore functions
import { db, auth } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

//composable
import { formatDate } from "../composables/forDate";
const { date } = formatDate("format");

//state management
import userflow from "./userflow";
import adminflow from "./adminflow";

export default createStore({
  state: {
    user: null,

    loading: {
      register: false,
      login: false,
    },
  },

  getters: {
    getLoading(state) {
      return state.loading;
    },
    getUser(state) {
      return state.user;
    },
  },

  mutations: {
    setLoading(state, { type, is }) {
      state.loading[type] = is;
    },
    setUser(state, value) {
      state.user = value;
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

    async loginUser({ commit }, payload) {
      commit("setLoading", { type: "login", is: true });

      await signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((cred) => {
          this.dispatch("validateUser", { uid: cred.user.uid });
        })
        .catch((error) => {
          userflow.dispatch("initAlert", {
            type: "error",
            is: true,
            message: error.code,
            timer: 5000,
          });
          commit("setLoading", { type: "login", is: false });
        });
    },

    async validateUser({ commit }, { uid }) {
      commit("setLoading", { type: "login", is: true });

      const colref = collection(db, "users");

      const currentUser = doc(colref, uid);

      await getDoc(currentUser).then((docRef) => {
        if (docRef.exists) {
          userflow.dispatch("initAlert", {
            is: true,
            type: "success",
            message: "Login Successfully",
            close: true,
            timer: 5000,
          });
          router.push("/admin/dashboard");
          commit("setLoading", { type: "login", is: false });
        } else {
          userflow.dispatch("initAlert", {
            type: "error",
            message: `User Doesn't Exist`,
            is: true,
            timer: 5000,
          });
          commit("setLoading", { type: "login", is: false });
        }
      });
    },

    async userWatch() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          await this.dispatch("getUserData", { uid: user.uid });
        } else {
          router.push("/login");
        }
      });
    },

    getUserData({ commit }, { uid }) {
      const currentUser = doc(db, "users", uid);
      onSnapshot(currentUser, (docRef) => {
        if (docRef.exists) {
          const userData = docRef.data();
          commit("setUser", userData);
        } else {
          router.push("/login");
        }

        adminflow.dispatch("initApp");
      });
    },

    async signOut({ commit }) {
      await signOut(auth)
        .then(() => {
          commit("setUser", null);
          router.push("/login");
          userflow.dispatch("initAlert", {
            type: "success",
            message: "Logged Out Successfully",
            is: true,
            close: true,
            timer: 3500,
          });
        })
        .catch((error) => {
          userflow.dispatch("initAlert", {
            type: "error",
            message: error.code,
            is: true,
            timer: 5000,
          });
        });
    },
  },
});
