import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import "@/firebase/firebase";
import { auth } from "@/firebase/firebase";

Vue.config.productionTip = false;

let app: unknown;

auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
