<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">
      {{ results[resultIndex].desc }}
    </div>
  </div></template
>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true,
    },
    totalCorrect: {
      type: Number,
      required: true,
    },
  },
  computed: {
    resultIndex() {
      let index = 0;
      this.results.forEach((item, i) => {
        if (item.min <= this.totalCorrect && item.max >= this.totalCorrect) {
          index = i;
        }
      });
      return index;
    },
  },
};
</script>

<style scoped></style>
