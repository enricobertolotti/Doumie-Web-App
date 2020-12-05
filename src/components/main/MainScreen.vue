<template>
  <div class="d-flex justify-content-center darker-bg w-100 h-100 p-3">
    <div class="d-flex flex-column flex-grow-1">
      <h1 class="align-self-start">{{ title }}</h1>
      <div class="d-flex flex-grow-1">
        <!-- Individual Pages go here -->
      </div>
    </div>
  </div>
</template>

<script>
import { states } from "@/models/States";

export default {
  data() {
    return {
      subtitle: ""
    };
  },
  computed: {
    title() {
      switch (this.$store.getters.currentState) {
        case states.group:
          return "Group View";
        case states.overview:
          return "Overview";
        case states.preferences:
          return "Preferences";
        default:
          return "Unknown State";
      }
    },
    state() {
      return this.$store.getters.currentState;
    }
  }, 
  methods: {
    setSubtitle(newSubtitle) {
      this.subtitle = newSubtitle;
    }
  }
};
</script>

<style lang="scss" scoped>
.darker-bg {
  border-radius: 2em 0 0 2em;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
