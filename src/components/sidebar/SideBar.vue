<template>
  <div
    class="d-flex flex-column justify-content-start w-100 h-100"
    style="background: #0e1428"
  >
    <Logo />
    <!-- Overview -->
    <SideBarSection
      class="sidebar-section"
      :data="overviewSection"
      v-on:clicked="overviewElementClicked"
    />

    <SideBarSection
      class="sidebar-section mb-auto"
      :data="overviewSection"
      v-on:clicked="overviewElementClicked"
    />

    <!-- Groups 
    <SideBarSection
      class="sidebar-section mb-auto"
      v-on:clicked="groupElementClicked"
    /> -->

    <!-- User Button -->
    <UserButton v-on:clicked="userButtonClicked()" />
  </div>
</template>

<script>
import Logo from "@/components/global/Logo.vue";
import UserButton from "./UserButton.vue";
import SideBarSection from "./SideBarSection.vue";
import { states } from "@/models/States";

export default {
  name: "",
  methods: {
    userButtonClicked() {
      this.$store.dispatch("updateAppState", {
        type: states.preferences,
        params: []
      });
    },
    overviewElementClicked(value) {
      this.$store.dispatch("updateAppState", {
        type: states.overview,
        params: [value]
      });
    },
    groupElementClicked(value) {
      this.$store.dispatch("updateAppState", {
        type: states.group,
        params: [value]
      });
    }
  },
  computed: {
    overviewSection() {
      const listItems = this.$store.getters.allOverviewItems;
      return {
        title: "Overview",
        button: false,
        items: listItems
      };
    }
  },
  components: {
    Logo,
    UserButton,
    SideBarSection
  }
};
</script>

<style lang="scss" scoped>
.sidebar-section {
  margin: 1em 0;
}
</style>
