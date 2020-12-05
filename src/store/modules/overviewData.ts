const state = {
  overviews: [
    {
      id: "today",
      name: "Today",
      color: "red"
    },
    {
      id: "week",
      name: "This Week",
      color: "blue"
    },
    {
      id: "anytime",
      name: "Anytime",
      color: "white"
    }
  ]
};

const getters = {
  allOverviewItems(state) {
    return state.overviews;
  },
  getOverviewTitle() {
    return "Overview";
  },
  getOverviewSubTitle: state => id => {
    switch (typeof id) {
      case "number":
        return state.overviews[id].name;
      case "string":
        return state.overviews.filter(element => element.id == id)[0].name;
      default:
        return "";
    }
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
