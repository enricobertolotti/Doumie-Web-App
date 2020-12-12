<template>
  <div v-if="todosLoaded" class="d-flex flex-column h-100">
    <ProjectPanelHeader :title="title" />
    <ToDoItemRow
      v-for="todoID in todoIDs"
      :key="todoID"
      :groupID="groupID"
      :projectID="projectID"
      :todoItemID="todoID"
    />
    <div v-if="isAddingTodo" class="d-flex w-100">
      <AddToDoItemComponent @finished="toggleIsAddingTask()" />
    </div>
    <AddItemButton v-on:clicked="toggleIsAddingTask()" />
  </div>
</template>

<script>
// Import Type Definitions
import { DataCategory } from "@/models/DataCategory";

// Import Components
import ProjectPanelHeader from "@/components/main/Project/ProjectPanelHeader";
import ToDoItemRow from "@/components/main/ToDoItem/ToDoItemRow";
import AddItemButton from "@/components/main/ToDoItem/AddItemButton.vue";
import AddToDoItemComponent from "@/components/main/ToDoItem/AddToDoItemComponent.vue";
import { mapState } from "vuex";

export default {
  props: {
    groupID: String,
    projectID: String
  },
  data() {
    return {
      isAddingTodo: false
    };
  },
  components: {
    ProjectPanelHeader,
    ToDoItemRow,
    AddItemButton,
    AddToDoItemComponent
  },
  computed: {
    todosLoaded() {
      return this.$store.getters.getObjectLoadedState(DataCategory.todo);
    },
    project() {
      const project = this.$store.getters.getProjectByID(this.projectID);
      console.log(
        "🚀 ~ file: ProjectPanel.vue ~ line 34 ~ project ~ project",
        project
      );
      return project;
    },
    title() {
      return this.project.title;
    },
    todoIDs() {
       console.log("🚀 ~ file: ProjectPanel.vue ~ line 64 ~ todoIDs ~ this.todos.id", this.todos.id);
      return this.todos.map(todo => todo.id);
    },
    ...mapState({
      todos: state => state.todoStore.todos
    })
  },
  methods: {
    toggleIsAddingTask() {
      this.isAddingTodo = !this.isAddingTodo;
    }
  }
};
</script>

<style lang="scss" scoped></style>
