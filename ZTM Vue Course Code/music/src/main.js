import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/main.css";
import VeeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";
import Icon from "./directives/icon";
import ProgressBar from "./includes/progressbar";
import "nprogress/nprogress.css";

ProgressBar(router);

let app;

auth.onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = createApp(App);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.directive("icon", Icon);

    app.mount("#app");
  }
});
