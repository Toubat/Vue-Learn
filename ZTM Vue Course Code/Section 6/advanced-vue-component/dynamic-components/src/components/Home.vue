<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log("Unmounted!");
  },
  activated() {
    console.log("activated!!");
  },
  deactivated() {
    console.log("deactivated!!");
  },
};
</script>

<style></style>
