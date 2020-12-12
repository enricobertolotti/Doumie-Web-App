<template>
  <div class="d-flex flex-column w-100 h-100 login">
    <h1 style="color: white;">Doumie</h1>
    <div class="d-flex flex-grow-1 justify-content-center align-items-center">
      <div class="col-md-6" style="max-width: 500px;">
        <LoginComponent
          class="cardify p-4"
          v-if="showLoginForm"
          v-on:createaccount="toggleVisibleScreen"
          v-on:resetpassword="showPasswordResetScreen"
        />
        <RegisterComponent
          v-else
          v-on:back="toggleVisibleScreen"
          class="cardify p-4"
        />
      </div>
    </div>
    <LoginTogglerComponent
      :description="togglerDescription"
      :buttontext="togglerButtonText"
      v-on:clicked="toggleVisibleScreen"
    />
  </div>
</template>

<script>
// Import Components
import LoginComponent from "@/components/login/LoginComponent.vue";
import RegisterComponent from "@/components/login/Register.vue";
import LoginTogglerComponent from "@/components/login/LoginTogglerComponent.vue";

export default {
  data() {
    return {
      showLoginForm: true,
      showPasswordReset: false
    };
  },
  methods: {
    toggleVisibleScreen() {
      this.showLoginForm = !this.showLoginForm;
    },
    showPasswordResetScreen() {
      this.showPasswordReset = true;
    }
  },
  computed: {
    togglerDescription() {
      return this.showLoginForm
        ? "Oh, I don't have an account yet"
        : "Oh wait I do have an account!";
    },
    togglerButtonText() {
      return this.showLoginForm ? "Sign Up" : "Log In";
    }
  },
  components: {
    LoginComponent,
    RegisterComponent,
    LoginTogglerComponent
  }
};
</script>

<style scoped>
.login {
  background-color: var(--dark-bg-color);
}

.cardify {
  border-radius: 0.5em;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.3);
}
</style>
