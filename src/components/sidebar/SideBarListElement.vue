<template>
  <div class="d-flex w-100 align-items-center p-1">
    <div class="dot" :style="style"></div>
    <h6 class="m-0">{{ listItemName }}</h6>
  </div>
</template>

<script>
export default {
  name: "SideBarListElement",
  props: {
    listItemName: String,
    color: String,
    width: Number,
    height: Number
  },
  computed: {
    style() {
      const bgColor = "background-color: " + this.color + "; ";
      const height = "height: " + this.height + "em; ";
      const width = "width: " + this.width + "em; ";
      const returnStyle = bgColor + height + width;
      console.log(returnStyle);
      return returnStyle;
    }
  }
};
</script>

<style lang="scss" scoped>
.dot {
  border-radius: 50%;
  display: inline-block;
  margin: 0 0.5em 0 0.5em;
}
</style>
