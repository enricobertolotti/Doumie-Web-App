<template>
  <div class="d-flex flex-column w-100 h-100">
    <!-- <SearchForProjectByID /> -->
    <GroupPanel v-for="groupid in groupIDs" :key="groupid" :groupID="groupid" />
  </div>
</template>

<script>
// Import Components
import GroupPanel from "@/components/main/Group/GroupPanel";
// import SearchForProjectByID from "@/components/global/SeachForProjectByID";
// import { mapState } from "vuex";

export default {
  computed: {
    groupIDs() {
      return this.$store.getters.getGroupIDs;
    }
    // ...mapState({
    //   groups: state => state.todoStore.groups
    // })
  },
  components: {
    GroupPanel
    // SearchForProjectByID
  }
};
</script>

<style lang="scss" scoped></style>
