import { Priority, ToDoItem } from "@/models/ToDoItem";

const state = {
  groups: [
    {
      id: "dfiuvsdgivbsdfs",
      title: "First Group",
      description: "First Test Group",
      projects: [
        {
          id: "isjbdvsodbvasodv",
          title: "First Project",
          description: "First Project Description",
          admin: {
            firstName: "Enrico",
            lastName: "Bertolotti",
            email: "enrico@bertolotti.com",
            avatarURL: "https://i.vimeocdn.com/portrait/29785473_100x100"
          },
          todos: [
            {
              id: "sakdhvibsaiduv",
              title: "First Todo",
              description: "The first todo item description",
              owner: {
                firstName: "Enrico",
                lastName: "Bertolotti",
                email: "enrico@bertolotti.com",
                avatarURL: "https://i.vimeocdn.com/portrait/29785473_100x100"
              },
              priority: Priority.high,
              completed: false,
              dueDate: new Date(2012, 0, 1)
            },
            {
              id: "asdkadjvbskdjvbs",
              title: "First Todo",
              description: "The first todo item description",
              owner: {
                firstName: "Enrico",
                lastName: "Bertolotti",
                email: "enrico@bertolotti.com",
                avatarURL: "https://i.vimeocdn.com/portrait/29785473_100x100"
              },
              priority: Priority.low,
              completed: false,
              dueDate: new Date()
            }
          ]
        }
      ]
    }
  ]
};

const getters = {
  getAllGroups(state) {
    return state.groups;
  },
  getAllGroupIDs: (state, getters) => {
    const result = getters.getAllGroups.map(group => group.id);
    console.log(result);
    return result;
  },
  getGroupByID: (state, getters) => groupID => {
    return getters.getAllGroups.find(group => group.id === groupID);
  },
  getGroupTitleByID: (state, getters) => groupID => {
    return getters.getGroupByID(groupID).title;
  },
  getGroupDescriptionByID: (state, getters) => groupID => {
    return getters.getGroupByID(groupID).description;
  },
  getAllProjects: (state, getters) => groupID => {
    return getters.getGroupByID(groupID).projects;
  },
  getAllProjectIDs: (state, getters) => groupID => {
    return getters.getAllProjects(groupID).map(project => project.id);
  },
  getProjectByID: (state, getters) => (groupID, projectID) => {
    return getters
      .getAllProjects(groupID)
      .find(project => project.id === projectID);
  },
  getProjectTitle: (state, getters) => (groupID, projectID) => {
    return getters.getProjectByID(groupID, projectID).title;
  },
  getProjectTodos: (state, getters) => (groupID, projectID) => {
    return getters.getProjectByID(groupID, projectID).todos;
  },
  getProjectTodoIDs: (state, getters) => (groupID, projectID) => {
    return getters.getProjectTodos(groupID, projectID).map(todo => todo.id);
  },
  getTodoByID: (state, getters) => (groupID, projectID, todoID) => {
    return getters
      .getProjectTodos(groupID, projectID)
      .find(todo => todo.id === todoID);
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
  // addTodo: context => (groupid: string, projectid, todo: ToDoItem) => {
  //   context.commit("addTodo", groupid, projectid, todo);
  // },
  // toggleTodoCompletionByID: context => (
  //   groupid: string,
  //   projectid,
  //   todoid: string
  // ) => {
  //   console.log("Arrived at action");
  //   context.commit("toggleTodoCompletionByID", groupid, projectid, todoid);
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
