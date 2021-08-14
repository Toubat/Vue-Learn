<template>
  <button type="button" @click="onClickAge">Update Age</button>
  <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
  <p>The user is {{ age }} years old.</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: [Number, String],
      required: true,
      default: 20,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["age-change"],
  methods: {
    onClickAge() {
      console.log("AASAS");
      this.$emit("age-change", 3);
    },
  },
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
};
</script>
