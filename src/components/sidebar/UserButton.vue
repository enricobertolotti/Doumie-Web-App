<template>
  <div class="d-flex userButton justify-content-left">
    <div class="d-flex userIcon align-self-center"></div>
    <div class="d-flex flex-column justify-items-start">
      <h4 class="align-self-start">{{ this.$store.state.auth.test }}</h4>
      <h6 class="align-self-start">{{ this.$store.state.auth.test }}</h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.userButton {
  background-color: rgba($color: #ffffff, $alpha: 0.1);
}

.userIcon {
  height: 3em;
  width: 3em;
  background-color: rgba($color: #ffffff, $alpha: 0.1);
  border-radius: 50%;
}
</style>
