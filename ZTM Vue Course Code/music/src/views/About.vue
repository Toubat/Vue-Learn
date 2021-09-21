<template>
  <main>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </main>
</template>

<script>
// dynamically register module
import dummyModule from "@/store/modules/dummy";

export default {
  created() {
    this.$store.registerModule("dummy", dummyModule);
  },
};
</script>

<style></style>
