<template>
  <div class="mobile-nav">
    <b-row class="dflex">
      <b-col cols="3">
        <img class="icon" src="../../assets/elements/summary_icon_filled.svg" />
      </b-col>   

      <b-col cols="3">
        <img class="icon" src="../../assets/elements/group_icon_filled.svg" />
      </b-col>   

      <b-col cols="3">
        <img class="icon" src="../../assets/elements/settings_icon_filled.svg" />
      </b-col>   

      <b-col cols="3">
        <img class="icon" src="../../assets/elements/plus_icon_empty.svg" />
      </b-col>  
    </b-row>
  </div>
</template>

<script>

export default {
  name: "MobileNav",
};
</script>

<style lang="scss" scoped>
.mobile-nav {
  background-color: var(--dark-bg-color);
  max-width: 760px;
  height: 70px;
  padding: 20px;
  border-radius: 20px;
  margin: auto;
  opacity: 0.8;
}
.icon {
  height: 35px;
 }
</style>
