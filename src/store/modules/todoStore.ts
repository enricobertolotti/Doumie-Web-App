import { ToDoItem } from "@/models/ToDoItem";

import { db } from "@/firebase/firebase";

const state = {
  db: db,
  groups: []
};

const getters = {
  getAllGroupIDs: state => {
    const groupIDs = state.groups.map(group => group.id);
    console.log("Group IDs: ", groupIDs);
    return groupIDs;
  }
};

const mutations = {
  addTodo: (state, getters) => (
    groupid: string,
    projectid: string,
    todo: ToDoItem
  ) => {
    // Todo create random id here
    todo.id = "ishbdvisjdvbs";
    getters.getProjectByID(groupid, projectid).push(todo);
  },
  toggleTodoCompletionByID(state, todo) {
    todo.completed = !todo.completed;
  }
};

const actions = {
  toggleTodoCompletionByID(
    { commit, getters },
    { groupID, projectID, todoItemID }
  ) {
    const todo = getters.getTodoByID(groupID, projectID, todoItemID);
    commit("toggleTodoCompletionByID", todo);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
