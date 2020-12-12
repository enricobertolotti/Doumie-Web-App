<template>
  <div class="d-flex w-100">

  </div>
</template>

<script>
import { Priority } from '@/models/ToDoItem';
  export default {
    data() {
      return {
        toDoItem: {
          title: "Title",
          description: "Decription",
          dueDate: new Date(),
          assignee: this.currentUser,
          priority: Priority.low,
        }
      }
    },
    computed: {
      currentUser() {
        return this.$store.getters.currentUser();
      }
    },
    methods: {
      submitTodoItem() {
        this.$store.dispatch("addTodoItem", this.toDoItem)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>