<template>
  <div
    class="d-flex listElement w-100 align-items-center p-1"
    v-on:click="$emit('clicked')"
  >
    <div class="dot" :style="dotStyle"></div>
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
    dotStyle() {
      const bgColor = "background-color: " + this.color + "; ";
      const height = "height: " + this.height + "em; ";
      const width = "width: " + this.width + "em; ";
      const returnStyle = bgColor + height + width;
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

.listElement {
  background-color: rgba($color: #ffffff, $alpha: 0);
  border-radius: 0.5em;
}

.listElement:hover {
  cursor: pointer;
  background-color: rgba($color: #ffffff, $alpha: 0.1);
}
</style>
