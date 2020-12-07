<template>
  <div class="d-flex flex-column w-100 h-100">
    <GroupPanel v-for="groupID in groupIDs" :key="groupID" :groupID="groupID" />
  </div>
</template>

<script>
// Import Components
import GroupPanel from "@/components/main/Group/GroupPanel";

export default {
  methods: {
    addTask() {
      alert("Add Task");
    }
  },
  computed: {
    groupIDs() {
      return this.$store.getters.getAllGroupIDs;
    }
  },
  components: {
    GroupPanel
  }
};
</script>

<style lang="scss" scoped></style>
