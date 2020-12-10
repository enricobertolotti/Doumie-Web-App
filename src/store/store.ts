import Vue from "vue";
import Vuex from "vuex";

import authStore from "./modules/authStore";
import appState from "./modules/appState";
import appElements from "./modules/overviewData";
import todoStore from "./modules/todoStore";

import * as fb from "@/firebase/firebase";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appState,
    authStore,
    appElements,
    todoStore
  }
});

export default store;

//////////////////////////////////////
// Synchronisation Functions
//////////////////////////////////////

fb.groups.onSnapshot(snapshot => {
  const groupArray = [];

  snapshot.forEach(doc => {
    const group = doc.data();
    group.id = doc.id;
    groupArray.push(group);
  });

  store.commit("setGroups", groupArray);
});

fb.projects.onSnapshot(
  snapshot => {
    const projectArray = [];

    snapshot.forEach(doc => {
      const project = doc.data();
      project.id = doc.id;
      projectArray.push(project);
    });

    store.commit("setProjects", projectArray);
  },
  error => {
    console.log(error);
  }
);

fb.todos.orderBy("dueDate", "desc").onSnapshot(snapshot => {
  const todoArray = [];

  snapshot.forEach(doc => {
    const todo = doc.data();
    todo.id = doc.id;
    todoArray.push(todo);
  });
  console.log(
    "🚀 ~ file: store.ts ~ line 64 ~ fb.todos.orderBy ~ todoArray",
    todoArray
  );

  store.commit("setTodos", todoArray);
});
