<template>
  <div class="d-flex flex-column w-100 justify-content-center">
    <b-form-input v-model="toDoItem.title" placeholder="Title"></b-form-input>
    <b-form-input
      v-model="toDoItem.description"
      placeholder="Description"
    ></b-form-input>
    <b-button @click="submitTodoItem()">Submit</b-button>
  </div>
</template>

<script>
import { Priority } from "@/models/ToDoItem";
export default {
  data() {
    return {
      toDoItem: {
        title: "Title",
        description: "Decription",
        dueDate: new Date(),
        priority: Priority.low
      }
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser();
    }
  },
  methods: {
    submitTodoItem() {
      this.$store.dispatch("addTodoItem", this.toDoItem);
      this.$emit("finished");
    }
  }
};
</script>

<style lang="scss" scoped></style>
