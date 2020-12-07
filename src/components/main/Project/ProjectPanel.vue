<template>
  <div class="d-flex flex-column h-100">
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
    project() {
      return this.$store.getters.getProjectByID(this.groupID, this.projectID);
    },
    title() {
      return this.project.title;
    },
    todoIDs() {
      return this.$store.getters.getProjectTodoIDs(
        this.groupID,
        this.projectID
      );
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
