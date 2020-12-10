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
    <AddItemButton v-on:clicked="addTask" />
  </div>
</template>

<script>
// Import Type Definitions
import { DataCategory } from "@/models/DataCategory";

// Import Components
import ProjectPanelHeader from "@/components/main/Project/ProjectPanelHeader";
import ToDoItemRow from "@/components/main/ToDoItem/ToDoItemRow";
import AddItemButton from "@/components/main/ToDoItem/AddItemButton.vue";

export default {
  props: {
    groupID: String,
    projectID: String
  },
  components: {
    ProjectPanelHeader,
    ToDoItemRow,
    AddItemButton
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
      const todoIDs = this.$store.getters.getTodoIDsInProject(this.projectID);
      console.log(
        "🚀 ~ file: ProjectPanel.vue ~ line 51 ~ todoIDs ~ todoIDs",
        todoIDs
      );
      return todoIDs;
    }
  },
  methods: {
    addTask() {
      alert("Add Task");
    }
  }
};
</script>

<style lang="scss" scoped></style>
