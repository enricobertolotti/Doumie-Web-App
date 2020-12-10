<template>
  <div
    class="d-flex userButton justify-content-left m-2 p-2"
    v-on:click="$emit('clicked')"
  >
    <div class="d-flex userIcon align-self-center">
      <b-avatar variant="light"></b-avatar>
    </div>
    <div class="d-flex flex-column justify-items-start">
      <h5 class="align-self-start">{{ userName() }}</h5>
      <h6 class="align-self-start">{{ email() }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    userName() {
      return this.$store.getters.fullName;
    },
    email() {
      return this.$store.getters.userEmail;
    }
  }
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

.userIcon {
  height: 3em;
  width: 3em;
  background-color: rgba($color: #ffffff, $alpha: 0.1);
  border-radius: 50%;
}
</style>
