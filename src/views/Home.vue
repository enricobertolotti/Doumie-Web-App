<template>
  <div class="d-flex h-100 w-100 home p-0">
    <div class="sidebar p-0">
      <SideBar @userButtonClicked="onUserButtonClick" />
    </div>
    <div class="p-0 w-100">
      <MainScreen :state="state" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// Import Components
import SideBar from "../components/sidebar/SideBar.vue";
import MainScreen from "../components/main/MainScreen.vue";

import { states } from "@/models/States";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      /** @type State */
      state: {
        /** @type states */
        stateType: states.group,
        stateParams: ""
      }
    };
  },
  methods: {
    onUserButtonClick() {
      this.state.stateType = states.preferences;
    },

    onGroupClick(value: string) {
      console.log(value);
    }
  },
  components: {
    SideBar,
    MainScreen
  }
});
</script>

<style lang="scss" scoped>
.home {
  background-color: var(--dark-bg-color);
}

.sidebar {
  max-width: 20em;
}
</style>
