<template>
  <div
    class="d-flex flex-column justify-content-start w-100 h-100"
    style="background: #0e1428"
  >
    <Logo />
    <!-- Overview -->
    <SideBarSection v-on:clicked="overviewElementClicked" class="mb-auto" />
    <!-- Groups -->
    <UserButton v-on:clicked="userButtonClicked()" />
  </div>
</template>

<script>
import Logo from "@/components/global/Logo.vue";
import UserButton from "./UserButton.vue";
import SideBarSection from "./SideBarSection.vue";
import { states } from "@/models/States"

export default {
  name: "",
  methods: {
    userButtonClicked() {
      console.log("userButtonClicked");
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
    }
  },
  components: {
    Logo,
    UserButton,
    SideBarSection
  }
};
</script>

<style lang="scss" scoped></style>
