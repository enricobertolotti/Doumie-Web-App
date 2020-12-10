<template>
  <div class="d-flex cardify justify-content-center p-1">
    <p class="align-self-center m-1" style="color: white">
      {{ description }}
    </p>
    <b-button
      class="m-1"
      variant="outline-light"
      size="sm"
      @click="$emit('clicked')"
      >{{ buttontext }}</b-button
    >
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    buttontext: String
  }
};
</script>

<style lang="scss" scoped></style>
