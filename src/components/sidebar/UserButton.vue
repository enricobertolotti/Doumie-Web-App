<template>
  <div
    class="d-flex userButton justify-content-left"
    v-on:click="$emit('clicked')"
  >
    <div class="d-flex userIcon align-self-center m-2">
      <b-avatar variant="light"></b-avatar>
    </div>
    <div class="d-flex flex-column justify-items-start m-2">
      <h6 class="align-self-start">{{ user.name }}</h6>
      <h6 class="align-self-start" style="opacity: 30%;">Preferences</h6>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: state => state.authStore.userProfile
    })
  }
  // methods: {
  //   userName() {
  //     return this.$store.getters.fullName;
  //   },
  //   email() {
  //     return this.$store.getters.userEmail;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.userButton {
  border-radius: 0.5em;
  background-color: rgba($color: #ffffff, $alpha: 0.1);
}

.userButton:hover {
  cursor: pointer;
  background-color: rgba($color: #ffffff, $alpha: 0.2);
}

h6 {
  margin: 0;
  padding: 0;
}
</style>
