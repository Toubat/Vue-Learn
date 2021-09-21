import { addDoc } from "firebase/firestore";
import { songsCollection } from "@/includes/firebase";

export default {
  actions: {
    //* eslint-disable */
    async addSong({ commit }, payload) {
      const songRef = await addDoc(songsCollection, payload);
      return songRef;
    },
  },
};
