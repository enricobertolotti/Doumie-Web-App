<template>
  <div class="d-flex align-items-center">
    <p class="m-0" :style="itemStyle">{{ priority }}</p>
  </div>
</template>

<script>
import { Priority } from "@/models/ToDoItemProperties";
export default {
  props: {
    priority: String
  },
  computed: {
    color() {
      switch (this.priority) {
        case Priority.low:
          return "green";
        case Priority.medium:
          return "orange";
        case Priority.high:
          return "red";
        default:
          return "black";
      }
    },
    itemStyle() {
      return "color: " + this.color + ";";
    }
  }
};
</script>

<style lang="scss" scoped></style>
