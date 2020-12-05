import { states } from "@/models/States";

const state = {
  stateType: states.overview,
  stateParams: [0]
};

const getters = {
  currentState(state) {
    return state.stateType;
  },
  stateTitle(state, getters, rootState, rootGetters) {
    switch (state.stateType) {
      case states.group:
        return "Group View";
      case states.overview:
        return rootGetters.getOverviewTitle;
      case states.preferences:
        return "Preferences";
      default:
        return "Unknown State";
    }
  }, 
  stateSubtitle(state, getters, rootState, rootGetters){
    switch (state.stateType) {
      case states.group:
        return "Group View";
      case states.overview:
        return rootGetters.getOverviewSubTitle(state.stateParams[0]);
      case states.preferences:
        return "";
      default:
        return "Unknown State";
    }
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
