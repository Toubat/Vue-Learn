import { createStore } from "vuex";
/* eslint-disable */
import { auth, createUserWithEmailAndPassword, usersCollection, addDoc } from "@/includes/firebase";

export default createStore({
  state: {
    authModalShow: false,
    isAuthenticated: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
      // console.log(state.authModalShow);
    },
    toggleAuth: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
  actions: {
    async register({ commit }, payload) {
      /* eslint-disable */
      const { name, email, password, age, country } = payload;

      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(usersCollection, {
        name,
        email,
        age,
        country,
      });

      commit("toggleAuth");
    },
  },
  modules: {},
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
});
