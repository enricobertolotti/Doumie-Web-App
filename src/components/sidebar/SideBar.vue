<template>
  <div
    class="d-flex flex-column justify-content-start w-100 h-100"
    style="background: #0e1428"
  >
    <Logo class="mb-auto" />
    <UserButton />
  </div>
</template>

<script>
import Logo from "@/components/global/Logo.vue";
import UserButton from "./UserButton.vue";

export default {
  components: {
    Logo,
    UserButton
  }
};
</script>

<style lang="scss" scoped></style>
