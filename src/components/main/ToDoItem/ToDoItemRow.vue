<template>
  <div class="d-flex todo-row-container w-100">
    <!-- Left Side -->
    <div class="d-flex w-50 align-items-center">
      <!-- Icon -->
      <div
        class="d-flex checkbox align-items-center h-100 m-2"
        v-on:click="toggleCompleted"
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
        :dueDate="date"
      />
    </div>
  </div>
</template>

<script>
// Model Definitions
import { Priority } from "@/models/ToDoItemProperties";

// Components
import ToDoItemPriority from "@/components/main/ToDoItem/ToDoItemPriority.vue";
import ToDoItemDue from "@/components/main/ToDoItem/ToDoItemDue.vue";

export default {
  data() {
    return {
      title: "Test Title",
      description: "Test Description",
      completed: false,
      priority: Priority.low,
      date: new Date()
    };
  },
  methods: {
    toggleCompleted() {
      this.completed = !this.completed;
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
