// TODO: Implement sync with firestore

const state = {
  firstName: "Enrico",
  lastName: "Bertolotti",
  email: "hello@enricobertolotti.com"
};
const getters = {
  fullName(state) {
    return state.firstName + " " + state.lastName;
  },
  userEmail(state) {
    return state.email;
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
