import { states } from "@/models/States";

const state = {
  stateType: states.overview,
  stateParams: []
};
const getters = {
  currentState(state) {
    return state.stateType;
  }
};
const mutations = {
  updateAppState(state, newState) {
    state.stateType = newState.type;
    state.stateParams = newState.params;
  }
};
const actions = {
  updateAppState(context, newState) {
    context.commit("updateAppState", newState);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
