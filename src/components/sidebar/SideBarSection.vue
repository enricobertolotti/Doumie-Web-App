<template>
  <div class="d-flex flex-column w-100">
    <div class="d-flex flex-columnjustify-content-between">
      <h6 class="align-self-start">Overview</h6>
    </div>
    <SideBarListElement
      v-for="(item, index) in items"
      :key="index"
      :listItemName="item.name"
      :color="item.color"
      :width="dimension[0]"
      :height="dimension[1]"
    />
  </div>
</template>

<script>
import SideBarListElement from "@/components/sidebar/SideBarListElement.vue";
export default {
  data() {
    return {
      items: [
        {
          name: "Today",
          color: "red"
        },
        {
          name: "This Week",
          color: "blue"
        },
        {
          name: "Anytime",
          color: "white"
        }
      ],
      dimension: [0.5, 0.5]
    };
  },
  components: {
    SideBarListElement
  }
};
</script>

<style lang="scss" scoped></style>
