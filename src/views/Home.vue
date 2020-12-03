<template>
  <div class="d-flex h-100 w-100 home p-0">
    <div class="sidebar p-0">
      <SideBar />
    </div>
    <div class="p-0 w-100">
      <MainScreen />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// Import Components
import SideBar from "../components/sidebar/SideBar.vue";
import MainScreen from "../components/main/MainScreen.vue";

export default Vue.extend({
  name: "Home",
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
