<template>
  <div
    class="d-flex justify-content-right"
    :class="{ 'flex-column': vertical }"
  >
    <img
      class="logo-image align-self-center"
      :class="{ 'right-margin': !vertical }"
      src="@/assets/elements/doumie_logo.svg"
    />
    <h1 class="align-self-center">doumie</h1>
  </div>
</template>

<script>
export default {
  props: {
    vertical: Boolean
  }
};
</script>

<style lang="scss" scoped>
.logo-image {
  width: 2em;
  height: auto;
}

.right-margin {
  margin-right: 1em;
}
</style>
