<template>
  <div class="d-flex align-items-center">
    <p class="m-0">{{ date }}</p>
  </div>
</template>

<script>
import { monthNames } from "@/models/ToDoItemProperties";

export default {
  props: {
    dueDate: Date
  },
  computed: {
    date() {
      let datestring = "";
      datestring += String(this.dueDate.getDate()) + " ";
      datestring += Object.values(monthNames)[this.dueDate.getMonth()] + " ";
      return datestring;
    }
  }
};
</script>

<style lang="scss" scoped></style>
