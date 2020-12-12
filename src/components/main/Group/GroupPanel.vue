<template>
  <div v-if="projectsLoaded && todosLoaded" class="d-flex flex-column w-100">
    <GroupHeader :title="title" :color="groupColor" />
    <ProjectPanel
      v-for="projectID in projectIDs"
      :key="projectID"
      :groupID="groupID"
      :projectID="projectID"
    />
  </div>
</template>

<script>
// Import DataModels
import { DataCategory } from "@/models/DataCategory";

// Import Components
import GroupHeader from "@/components/main/Group/GroupHeader";
import ProjectPanel from "@/components/main/Project/ProjectPanel";

export default {
  props: {
    groupID: String
  },
  computed: {
    projectsLoaded() {
      return this.$store.getters.getObjectLoadedState(DataCategory.project);
    },
    todosLoaded() {
      return this.$store.getters.getObjectLoadedState(DataCategory.todo);
    },
    title() {
      return this.$store.getters.getGroupTitleByID(this.groupID);
    },
    projectIDs() {
      return this.$store.getters.getProjectIDsInGroup(this.groupID);
    },
    groupColor() {
      return this.$store.getters.getGroupByID(this.groupID).color;
    }
  },
  components: {
    ProjectPanel,
    GroupHeader
  }
};
</script>

<style lang="scss" scoped></style>
