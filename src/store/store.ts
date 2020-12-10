import Vue from "vue";
import Vuex from "vuex";

import authStore from "./modules/authStore";
import appState from "./modules/appState";
import appElements from "./modules/overviewData";
// import todoStore from "./modules/todoStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appState,
    authStore,
    appElements
  }
});
