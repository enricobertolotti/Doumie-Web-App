<template>
  <div class="d-flex flex-column w-100">
    <GroupHeader :title="title" />
    <ProjectPanel
      v-for="projectID in projectIDs"
      :key="projectID"
      :groupID="groupID"
      :projectID="projectID"
    />
  </div>
</template>

<script>
// Import Components
import GroupHeader from "@/components/main/Group/GroupHeader";
import ProjectPanel from "@/components/main/Project/ProjectPanel";

export default {
  props: {
    groupID: String
  },
  computed: {
    title() {
      return this.$store.getters.getGroupTitleByID(this.groupID);
    },
    projectIDs() {
      return this.$store.getters.getAllProjectIDs(this.groupID);
    }
  },
  components: {
    ProjectPanel,
    GroupHeader
  }
};
</script>

<style lang="scss" scoped></style>
