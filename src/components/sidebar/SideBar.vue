<template>
  <div
    class="d-flex flex-column justify-content-start w-100 h-100"
    style="background: #0e1428"
  >
    <Logo />
    <SideBarSection class="mb-auto" 
      
    />
    <UserButton />
  </div>
</template>

<script>
import Logo from "@/components/global/Logo.vue";
import UserButton from "./UserButton.vue";
import SideBarSection from "./SideBarSection.vue";

export default {
  components: {
    Logo,
    UserButton,
    SideBarSection
  }
};
</script>

<style lang="scss" scoped></style>
