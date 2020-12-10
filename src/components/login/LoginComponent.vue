<template>
  <!-- Input Form -->
  <b-form>
    <b-form-group
      id="input-group-1"
      label="Email"
      label-for="input-1"
      class="text-left whiteText"
    >
      <b-form-input
        id="input-1"
        v-model="loginForm.email"
        type="email"
        required
        placeholder="Enter email"
        autocomplete="email"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-2"
      label="Password"
      label-for="input-2"
      class="text-left whiteText"
    >
      <b-form-input
        type="password"
        id="text-password"
        v-model="loginForm.password"
        aria-describedby="password-help-block"
        placeholder="Enter Password"
        autocomplete="current-password"
      ></b-form-input>
    </b-form-group>

    <b-button @click="login()" variant="primary">Log In</b-button>
  </b-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    createAccount() {
      this.$emit("createaccount");
    },
    forgotPassword() {
      this.$emit("forgotPassword");
    },
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.whiteText {
  color: rgba($color: white, $alpha: 0.8);
}

.form-horizontal .control-label.text-left {
  text-align: left;
}
</style>
