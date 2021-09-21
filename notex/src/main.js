import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GlobalComponents from "./includes/_global";

createApp(App)
  .use(store)
  .use(router)
  .use(GlobalComponents)
  .mount("#app");
