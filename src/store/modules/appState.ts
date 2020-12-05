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
const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
