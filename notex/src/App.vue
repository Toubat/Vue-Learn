<template>
  <div id="app">
    <Tiptap v-model="modelValue" />
    <DefaultEditor v-model="modelValue2" />
    <BaseButton />
  </div>
</template>

<script>
import Tiptap from "./components/Tiptap.vue";
import DefaultEditor from "./components/DefaultEditor.vue";

export default {
  name: "App",
  data() {
    return {
      modelValue: "123",
      modelValue2: "12345",
    };
  },
  components: {
    Tiptap,
    DefaultEditor,
  },
};
</script>

<style lang="scss"></style>
