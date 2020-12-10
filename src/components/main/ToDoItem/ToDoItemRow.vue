<template>
  <div class="d-flex todo-row-container w-100">
    <!-- Left Side -->
    <div class="d-flex w-50 align-items-center">
      <!-- Icon -->
      <div
        class="d-flex checkbox align-items-center h-100 m-2"
        v-on:click="toggleCompleted()"
      >
        <img
          v-if="completed"
          src="@/assets/elements/checkbox_icon_filled.svg"
          alt="checkbox-filled"
          class="checkbox-icon"
        />
        <img
          v-else
          src="@/assets/elements/checkbox_icon_empty.svg"
          alt="checkbox-empty"
          class="checkbox-icon"
        />
      </div>
      <!-- Text Title -->
      <div class="d-flex flex-column p-0 m-2">
        <h6 class="align-self-start m-0">{{ title }}</h6>
        <p class="align-self-start todoDescription m-0">{{ description }}</p>
      </div>
    </div>
    <!-- Right Side -->
    <div class="d-flex w-50 align-items-center">
      <ToDoItemPriority
        class="d-flex justify-content-center h-100 w-100"
        :priority="priority"
      />
      <ToDoItemDue
        class="d-flex justify-content-center h-100 w-100"
        :dueDate="dueDate"
      />
    </div>
  </div>
</template>

<script>
// Components
import ToDoItemPriority from "@/components/main/ToDoItem/ToDoItemPriority.vue";
import ToDoItemDue from "@/components/main/ToDoItem/ToDoItemDue.vue";
import { mapActions } from "vuex";

export default {
  props: {
    todoItemID: String
  },
  methods: {
    toggleCompleted() {
      this.setTodoCompletion({
        todoID: this.todoItemID,
        completed: !this.completed
      });
    },
    ...mapActions(["setTodoCompletion"])
  },
  computed: {
    todo() {
      return this.$store.getters.getTodoByID(this.todoItemID);
    },
    title() {
      return this.todo.title;
    },
    description() {
      return this.todo.description;
    },
    completed() {
      const completion = this.todo.completed;
      console.log(
        "🚀 ~ file: ToDoItemRow.vue ~ line 71 ~ completed ~ completion",
        completion
      );
      return completion;
    },
    priority() {
      return this.todo.priority;
    },
    dueDate() {
      return this.todo.dueDate.toDate();
    }
  },
  components: {
    ToDoItemPriority,
    ToDoItemDue
  }
};
</script>

<style lang="scss" scoped>
.todo-row-container {
  height: 2.5em;
}

.checkbox-icon {
  padding: 0;
  margin: 0;
  width: auto;
  height: 1em;
}

.checkbox-icon:hover {
  cursor: pointer;
}

.todoDescription {
  font-size: 0.8em;
}
</style>
