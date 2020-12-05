import Vue from "vue";
import Vuex from "vuex";

import authStore from "./modules/authStore";
import appState from "./modules/appState";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authStore,
    appState: appState
  }
});
