import * as fb from "@/firebase/firebase";

import router from "@/router/index";

const state = {
  userProfile: {}
};

const getters = {
  fullName(state) {
    return state.userProfile.name;
  },
  userEmail(state) {
    return state.userProfile.email;
  }
};

const mutations = {
  setUserProfile(state, val) {
    state.userProfile = val;
  }
};

const actions = {
  async login(_, form) {
    await fb.auth.signInWithEmailAndPassword(form.email, form.password);
    router.push("/dashboard");
  },
  async fetchUserProfile({ commit }) {
    // Get currently signed in user
    const userID = fb.auth.currentUser.uid;
    // fetch user profile
    const userProfile = await fb.users.doc(userID).get();
    // set user profile in state
    commit("setUserProfile", userProfile.data());
  },

  async signup({ dispatch }, form) {
    await console.log("Signing Up in store");
    const { user } = await fb.auth.createUserWithEmailAndPassword(
      form.email,
      form.password
    );
    console.log(typeof user.uid);

    // create user profile object in userCollections
    await fb.users.doc(user.uid).set({
      name: form.name,
      email: user.email
    });

    // fetch user profile and set in state
    dispatch("fetchUserProfile");
    router.push("/dashboard");
  },
  async logout({ commit }) {
    await fb.auth.signOut();

    // clear userProfile and redirect to /login
    commit("setUserProfile", {});
    router.push("/login");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
