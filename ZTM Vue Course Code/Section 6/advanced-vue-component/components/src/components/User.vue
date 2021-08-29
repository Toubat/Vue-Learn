<template>
  <button type="button" @click="onAgeIncrement">Update Age</button>
  <button type="button" @click="ageChangeFn(3)">Update Age Fn</button>
  <p>The user is {{ age }} years old.</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: [Number, String],
      // required: true,
      default: 20,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["age-increment"],
  methods: {
    onAgeIncrement() {
      this.$emit("age-increment", 3);
    },
  },
};
</script>

<style></style>
