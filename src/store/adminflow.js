/* eslint-disable */
// firebase functions
import { db, str } from "@/services/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { createStore } from "vuex";

//for state management
import userflow from "./userflow";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

//composables
formatDate;
import { formatDate } from "@/composables/forDate";
const { date } = formatDate("format");

export default createStore({
  state: {
    users: [],
    shipments: [],

    loading: {
      shipment: false,
      delete: false,
    },
  },
  getters: {
    getState: (state) => (value) => {
      return state[value];
    },
    getLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    setState(state, { type, value }) {
      state[type] = value;
    },
    setLoading(state, { type, is }) {
      state.loading[type] = is;
    },
  },
  actions: {
    async photoFN(context, { photo, path }) {
      const sliceExt = photo.name.slice(photo.name.lastIndexOf("."));
      const sliceName = photo.name.slice(0, photo.name.lastIndexOf("."));

      const photoRef = ref(str, `${path}/${sliceName}${sliceExt}`);
      let URL = "";
      await uploadBytes(photoRef, photo)
        .then(async () => {
          await getDownloadURL(photoRef)
            .then((photoUrl) => {
              URL = photoUrl;
            })
            .catch((error) => {
              userflow.dispatch("initAlert", {
                type: "error",
                timer: 10000,
                is: true,
                message: error.code,
              });
            });
        })
        .catch((error) => {
          userflow.dispatch("initAlert", {
            type: "error",
            timer: 10000,
            is: true,
            message: error.code,
          });
        });
      return URL;
    },

    async initAllUsers({ commit }) {
      const colref = collection(db, "users");

      await getDocs(colref)
        .then((docRefs) => {
          if (!docRefs.empty) {
            const arr = [];
            docRefs.forEach((docs) => {
              arr.push(docs.data());
            });

            commit("setState", { type: "users", value: arr });
          } else {
            commit("setState", { type: "users", value: [] });
          }
        })
        .catch((error) => {
          userflow.dispatch("initAlert", {
            type: "error",
            is: true,
            message: error.code,
            timer: 7000,
          });
        });
    },

    async editShipment({ commit, dispatch }, payload) {
      commit("setLoading", { type: "shipment", is: true });
      const colref = collection(db, "shipments");

      if (payload.passportP) {
        const passportPhoto = await dispatch("photoFN", {
          photo: payload.passportPhoto,
          path: "shipments",
        });
        payload.passportPhoto = passportPhoto;
      }

      if (payload.shipmentP) {
        const shipmentPhoto = await dispatch("photoFN", {
          photo: payload.shipmentPhoto,
          path: "shipments",
        });

        payload.shipmentPhoto = shipmentPhoto;
      }

      const currentUserDoc = doc(colref, payload.id);

      await updateDoc(currentUserDoc, payload)
        .then(() => {
          userflow.dispatch("initAlert", {
            type: "success",
            is: true,
            message: `Shipment For ${payload.fullName} Updated Successfully`,
            close: true,
            timer: 6000,
          });
          dispatch("initAllShipments");
          commit("setLoading", { type: "shipment", is: false });
        })
        .catch((error) => {
          userflow.dispatch("initAlert", {
            type: "error",
            is: true,
            message: error.code,
            timer: 7000,
          });
          commit("setLoading", { type: "shipment", is: false });
        });
    },

    async addShipment({ commit, dispatch }, payload) {
      commit("setLoading", { type: "shipment", is: true });

      const colref = collection(db, "shipments");

      const passportPhoto = await dispatch("photoFN", {
        photo: payload.passportPhoto,
        path: "shipments",
      });

      payload.passportPhoto = passportPhoto;

      const shipmentPhoto = await dispatch("photoFN", {
        photo: payload.shipmentPhoto,
        path: "shipments",
      });

      payload.shipmentPhoto = shipmentPhoto;

      //added prop to arrange array
      payload.formattedDate = date;
      payload.status = "Ongoing";

      let trackingCode = "";

      function getTrackingCode() {
        for (let index = 0; index < 6; index++) {
          let rando = Math.round(Math.random() * 9);
          trackingCode += rando.toString();
        }
        return trackingCode;
      }

      payload.trackingCode = getTrackingCode();
      payload.progress = "10";

      await addDoc(colref, payload)
        .then((docRef) => {
          const currentUserDoc = doc(colref, docRef.id);

          updateDoc(currentUserDoc, {
            id: docRef.id,
          })
            .then(() => {
              userflow.dispatch("initAlert", {
                type: "success",
                message: "Shipment Created Successfully",
                is: true,
                close: true,
                timer: 5000,
              });
              this.dispatch("initAllShipments");
              commit("setLoading", { type: "shipment", is: false });
            })
            .catch((error) => {
              userflow.dispatch("initAlert", {
                type: "error",
                is: true,
                message: error.code,
                timer: 7000,
              });
            });
          commit("setLoading", { type: "shipment", is: false });
        })
        .catch((error) => {
          userflow.dispatch("initAlert", {
            type: "error",
            is: true,
            message: error.code,
            timer: 7000,
          });
          commit("setLoading", { type: "shipment", is: false });
        });
    },

    async initAllShipments({ commit }) {
      const colref = collection(db, "shipments");

      await getDocs(colref)
        .then((docRefs) => {
          if (!docRefs.empty) {
            const arr = [];
            let sorting;
            docRefs.forEach((docs) => {
              arr.push(docs.data());

              sorting = arr.sort((a, b) => {
                const dateA = new Date(a.formattedDate);
                const dateB = new Date(b.formattedDate);

                return dateB - dateA;
              });
            });
            commit("setState", { type: "shipments", value: sorting });
          } else {
            commit("setState", { type: "shipments", value: [] });
          }
        })
        .catch((error) => {
          userflow.dispatch("initAlert", {
            is: true,
            message: error.code,
            type: "error",
            timer: 5000,
          });
        });
    },

    async deleteShipment(context, payload) {
      this.commit("setLoading", { type: "delete", is: true });

      const currentUserDoc = doc(db, "shipments", payload.id);

      await deleteDoc(currentUserDoc)
        .then(() => {
          userflow.dispatch("initAlert", {
            is: true,
            message: `Shipment for ${payload.fullName} Deleted Successfully`,
            type: "error",
            close: true,
            timer: 6000,
          });
          this.commit("setLoading", { type: "delete", is: false });
          this.dispatch("initAllShipments");
        })
        .catch((error) => {
          userflow.dispatch("initAlert", {
            type: "error",
            timer: 6000,
            message: error.code,
            is: true,
          });
          this.commit("setLoading", { type: "delete", is: false });
        });
    },

    async initApp() {
      await this.dispatch("initAllUsers");
      await this.dispatch("initAllShipments");
    },
  },
  modules: {},
});
