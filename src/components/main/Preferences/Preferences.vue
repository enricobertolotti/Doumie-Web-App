<template>
  <div class="d-flex w-100 h-100">
    <h5>Preference Page</h5>
    <b-button @click="signOut()">Sign Out</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      console.log("Signing out");
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped></style>
