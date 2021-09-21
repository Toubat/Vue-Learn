<template>
  <main>
    <!-- Main Content -->
    <section class="container mx-auto mt-6">
      <div class="md:grid md:grid-cols-3 md:gap-4">
        <div class="col-span-1">
          <Upload ref="uploadRef" :addSong="addSong" />
        </div>
        <div class="col-span-2">
          <div class="bg-white rounded border border-gray-200 relative flex flex-col">
            <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
              <span class="card-title">My Songs</span>
              <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
            </div>
            <div class="p-6">
              <!-- Composition Items -->
              <CompositionItem
                v-for="(song, idx) in songs"
                :key="song.docId"
                :song="song"
                :updateSong="(values) => updateSong(idx, values)"
                :removeSong="(idx) => removeSong(idx)"
                :updateUnsavedFlag="updateUnsavedFlag"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import store from "@/store";
import { query, where, getDocs } from "firebase/firestore";
import Upload from "@/components/Upload.vue";
import CompositionItem from "@/components/CompositionItem.vue";
import { songsCollection, auth } from "@/includes/firebase";

export default {
  name: "Manage",
  components: {
    Upload,
    CompositionItem,
  },
  data() {
    return {
      songs: [],
      unsavedFlag: false,
    };
  },
  async created() {
    const q = query(songsCollection, where("uid", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.addSong(doc);
    });
  },
  //   beforeRouteEnter(to, from, next) {
  //     if (store.state.isAuthenticated) {
  //       next();
  //     } else {
  //       next({ name: "home" });
  //     }
  //   },
  beforeRouteLeave(to, from, next) {
    this.$refs.uploadRef.cancelUploads();
    if (!this.unsavedFlag) {
      next();
    } else {
      /* eslint-disable */
      const leave = confirm("You have unsaved changes. Are you sure you want to leave?");
      next(leave);
    }
  },
  methods: {
    updateSong(i, { modifiedName, genre }) {
      this.songs[i].modifiedName = modifiedName;
      this.songs[i].genre = genre;
    },
    removeSong(i) {
      this.songs.splice(i, 1);
    },
    addSong(doc) {
      const song = {
        ...doc.data(),
        docId: doc.id,
      };
      this.songs.push(song);
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value;
    },
  },
};
</script>

<style></style>
