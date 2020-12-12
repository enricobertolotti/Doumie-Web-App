<template>
  <div>
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
          :todoID="todoItemID"
          @updatePriority="updateTodoPriority"
        />
        <ToDoItemDue
          class="d-flex justify-content-center h-100 w-100"
          :dueDate="dueDate"
        />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
// Components
import ToDoItemPriority from "@/components/main/ToDoItem/ToDoItemPriority.vue";
import ToDoItemDue from "@/components/main/ToDoItem/ToDoItemDue.vue";

// Store
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("todoStore");

export default {
  name: "ToDoItemRow",
  props: {
    todoItemID: String
  },
  methods: {
    toggleCompleted() {
      this.$store.dispatch("updateTodoCompletion", {
        todoID: this.todoItemID,
        completed: !this.completed
      });
    },
    updateTodoPriority(priority) {
      console.log("updateing priority with", priority);
      this.updateTodoPriority({
        todoID: this.todoItemID,
        priority: priority
      });
    },
    ...mapActions(["updateTodoCompletion", "updateTodoPriority"])
  },
  computed: {
    todo() {
      return this.$store.getters.getTodoByID(this.todoItemID);
    },
    title() {
      return this.$store.getters.getTodoPropertyByID(this.todoItemID, "title");
    },
    description() {
      return this.$store.getters.getTodoPropertyByID(
        this.todoItemID,
        "description"
      );
    },
    completed() {
      return this.$store.getters.getTodoPropertyByID(
        this.todoItemID,
        "completed"
      );
    },
    dueDate() {
      return this.$store.getters
        .getTodoPropertyByID(this.todoItemID, "dueDate")
        .toDate();
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
  opacity: 70%;
}

hr {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  border: 0;
  border-top: 2px solid rgba(255, 255, 255, 0.05);
  width: 100%;
}
</style>
