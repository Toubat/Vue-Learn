let vm = Vue.createApp({
  data() {
    return {
      message: "Hello World!",
    };
  },
});

vm.component("hello", {
  data() {
    return {
      message: "Hello World!",
    };
  },
  template: `<h1>{{message}}</h1>`,
});

vm.mount("#app");

// setTimeout(() => {
//   vm.mount("#app");
// }, 3000);

// vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello World!",
//     };
//   },
//   render() {
//     return Vue.h("h1", this.message);
//   },
// }).mount("#app2");
