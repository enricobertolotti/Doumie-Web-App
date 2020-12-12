<template>
  <div
    class="d-flex flex-column justify-content-start w-100 h-100"
    style="background: #0e1428"
  >
    <Logo :vertical="false" class="sidebar-section" />
    <!-- Overview -->
    <SideBarSection
      class="sidebar-section"
      :data="overviewSection"
      v-on:clicked="overviewElementClicked"
    />

    <SideBarSection
      class="sidebar-section mb-auto"
      :data="groupSection"
      v-on:clicked="groupElementClicked()"
      v-on:buttonClicked="sectionButtonClicked()"
    />

    <!-- Groups 
    <SideBarSection
      class="sidebar-section mb-auto"
      v-on:clicked="groupElementClicked"
    /> -->

    <!-- User Button -->
    <UserButton class="userButton" v-on:clicked="userButtonClicked()" />
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
    sectionButtonClicked() {
      alert("Section Button Clicked");
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
    },
    groupSection() {
      const groups = this.$store.getters.getGroups;
      const items = [];
      groups.forEach(group =>
        items.push({ id: group.id, name: group.title, color: group.color })
      );
      return {
        title: "My Groups",
        button: {
          text: "+",
          emit: "buttonClicked"
        },
        items: items
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
  padding: 1em 1.5em;
}
.userButton {
  margin: 1em;
}
</style>
