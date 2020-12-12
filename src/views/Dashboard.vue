<template>
  <div class="d-flex h-100 w-100 home p-0" :class="{ 'flex-column': isMobile }">
    <div v-if="!isMobile" class="sidebar p-0">
      <SideBar @userButtonClicked="onUserButtonClick" />
    </div>
    <div class="p-0 w-100 flex-grow-1">
      <MainScreen :state="state" />
    </div>
    <div v-if="isMobile" class="mobile-nav">
      <MobileNav />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// Import Components
import SideBar from "../components/sidebar/SideBar.vue";
import MainScreen from "../components/main/MainScreen.vue";
import MobileNav from "../components/mobile/MobileNav.vue";

import { states } from "@/models/States";

export default Vue.extend({
  name: "Dashboard",
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
  computed: {
    isMobile() {
      return !this.$screen.md;
    }
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
    MainScreen,
    MobileNav
  },
  created() {
    // console.log(this.$store.getters.getGroupIDs);
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
