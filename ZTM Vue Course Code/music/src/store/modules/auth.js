import { setDoc, doc } from "firebase/firestore";
/* eslint-disable */
import {
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth, db } from "@/includes/firebase";

export default {
  // namespaced: true,
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

      const userCredeintial = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredeintial.user.uid), {
        name,
        email,
        age,
        country,
      });
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      commit("toggleAuth");
    },
    async login({ commit }, payload) {
      /* eslint-disable */
      const { email, password } = payload;
      await signInWithEmailAndPassword(auth, email, password);

      commit("toggleAuth");
    },
    initLogin({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit("toggleAuth");
      }
    },
    async logout({ commit }, { router, route }) {
      console.log("ASD");
      await signOut(auth);
      commit("toggleAuth");
      if (route.meta.requiresAuth) {
        router.push({ name: "home" });
      }
    },
  },
};
