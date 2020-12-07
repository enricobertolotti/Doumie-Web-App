<template>
  <div class="d-flex w-100 justify-content-center align-items-center">
    <div
      class="d-flex addButton justify-content-center align-items-center p-1"
      v-on:click="$emit('clicked')"
    >
      <img src="@/assets/elements/plus_icon_empty.svg" class="plus-icon m-1" />
      <h6 class="m-1">Add Task</h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.plus-icon {
  height: 0.7em;
  width: auto;
}

.addButton {
  border-radius: 0.5em;
}

.addButton:hover {
  cursor: pointer;
  color: rgba($color: #ffffff, $alpha: 0.8);
  background-color: rgba($color: #ffffff, $alpha: 0.1);
}
</style>
