<template>
  <app-header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <player />
  <auth-model />
</template>

<script>
import AppHeader from "./components/Header.vue";
import AuthModel from "./components/Auth.vue";
import Player from "./components/Player.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AuthModel,
    Player,
  },
  created() {
    this.$store.dispatch("initLogin");
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.2s linear;
}

.fade-leave-to {
  transition: all 0.2s linear;
  opacity: 0;
}
</style>
