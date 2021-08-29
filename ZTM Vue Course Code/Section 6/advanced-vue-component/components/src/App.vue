<template>
  <h3>Hey!</h3>
  <Greeting :age="age" />
  <User :age="age" @age-increment="updateAge" :ageChangeFn="updateAgeCB" />
  <p>{{ ageDoubled }}</p>
</template>

<script>
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    },
  },
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
};
</script>
