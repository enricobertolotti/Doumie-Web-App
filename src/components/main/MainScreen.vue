<template>
  <div class="d-flex justify-content-center darker-bg w-100 h-100 p-3">
    <div class="d-flex flex-column flex-grow-1">
      <h1 class="align-self-start">{{ title }}</h1>
      <h6 v-if="subtitle" class="align-self-start">{{ subtitle }}</h6>
      <div class="d-flex flex-grow-1">
        <!-- Individual Pages go here -->
        <OverviewPanel v-if="state == 'overview'" />
        <Preferences v-if="state == 'preferences'" />
        <GroupView v-else-if="state == 'group'" />
      </div>
    </div>
  </div>
</template>

<script>
// Import individual page components
import Preferences from "@/components/main/Preferences/Preferences";
import OverviewPanel from "@/components/main/Overview/OverviewPanel";

export default {
  computed: {
    title() {
      return this.$store.getters.stateTitle;
    },
    state() {
      return this.$store.getters.currentState.toLowerCase();
    },
    subtitle() {
      return this.$store.getters.stateSubtitle;
    }
  },
  components: {
    OverviewPanel,
    Preferences
  }
};
</script>

<style lang="scss" scoped>
.darker-bg {
  border-radius: 2em 0 0 2em;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
