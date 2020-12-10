<template>
  <div>
    <h1 style="color: white;">Home Screen</h1>
    <b-button @click="loginPage()">Login</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    loginPage() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped></style>
