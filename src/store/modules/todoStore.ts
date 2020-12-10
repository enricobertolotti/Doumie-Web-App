import Vue from "vue";
import Vuex from "vuex";

import * as fb from "@/firebase/firebase";

import { DataCategory } from "@/models/DataCategory";
import { CardPlugin } from "bootstrap-vue";

Vue.use(Vuex);

const state = {
  groups: [],
  projects: [],
  todos: [],

  groupsLoaded: false,
  projectsLoaded: false,
  todosLoaded: false
};

const getters = {
  ///// State Operations
  getObjectLoadedState: state => (objectCategory: DataCategory) => {
    switch (objectCategory) {
      case DataCategory.group:
        return state.groupsLoaded;
      case DataCategory.project:
        return state.projectsLoaded;
      case DataCategory.todo:
        return state.todosLoaded;
    }
  },
  ///// Group Operations
  getGroupIDs: state => {
    return state.groups.map(group => group.id);
  },
  getGroupByID: state => groupID => {
    return state.groups.find(group => group.id == groupID);
  },
  getGroupTitleByID: (_state, getters) => groupID => {
    return getters.getGroupByID(groupID).title;
  },

  ////// Project Operations
  getProjectIDsInGroup: (_state, getters) => groupID => {
    return getters.getGroupByID(groupID).projects.map(project => project.id);
  },
  getProjectByID: state => projectID => {
    console.log("Number of projects to search through", state.projects.length);
    return state.projects.find(project => project.id == projectID);
  },
  getProjectTitleByID: (_state, getters) => projectID => {
    return getters.getProjectByID(projectID).title;
  },

  ////// ToDo Operations
  getTodoIDsInProject: (_state, getters) => projectID => {
    return getters.getProjectByID(projectID).todos.map(todo => todo.id);
  },
  getTodoByID: state => todoID => {
    return state.todos.find(todo => todo.id == todoID);
  }
};

const mutations = {
  // Firebase synchronisation mutations
  setGroups(state, groups) {
    state.groups = groups;
    state.groupsLoaded = true;
  },
  setProjects(state, projects) {
    state.projects = projects;
    state.projectsLoaded = true;
  },
  setTodos(state, todos) {
    state.todos = todos;
    state.todosLoaded = true;
  },
  setTodoCompletion(state, { todoID, completed }) {
    try {
      state.todos.find(todo => todo.id == todoID).completed = completed;
    } catch (err) {
      console.log("todoStore: Error trying to set todo completion: ", err);
    }
  }
};

const actions = {
  setTodoCompletion(context, { todoID, completed }) {
    // Set todo in current browser session first and then push to firebase
    context.commit("setTodoCompletion", {
      todoID: todoID,
      completed: completed
    });
    fb.todos.doc(todoID).update({ completed: completed });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
