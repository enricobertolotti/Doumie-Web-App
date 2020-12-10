<template>
  <div>
    <b-button @click="getProjectTitle()">Click Me</b-button>
    <p>{{ projectTitle }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectID: "8MX1GJAO6pNwiZnL3NMg",
      projectTitle: ""
    };
  },
  methods: {
    getProjectTitle() {
      this.projectTitle = this.$store.getters.getProjectByID(this.projectID)
        ? this.$store.getters.getProjectTitleByID(this.projectID)
        : "Cant Find It";
    }
  }
};
</script>

<style lang="scss" scoped></style>
