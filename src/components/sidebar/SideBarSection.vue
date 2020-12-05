<template>
  <div class="d-flex flex-column w-100">
    <div class="d-flex flex-columnjustify-content-between">
      <h6 class="align-self-start">{{ data.title }}</h6>
    </div>
    <SideBarListElement
      v-for="(item, index) in data.items"
      :key="index"
      :listItemName="item.name"
      :color="item.color"
      :width="dimension[0]"
      :height="dimension[1]"
      v-on:clicked="clicked(item.id)"
    />
  </div>
</template>

<script>
import SideBarListElement from "@/components/sidebar/SideBarListElement.vue";
export default {
  props: {
    data: Object
  },
  data() {
    return {
      dimension: [0.5, 0.5]
    };
  },
  methods: {
    clicked(value) {
      this.$emit("clicked", value);
    }
  },
  components: {
    SideBarListElement
  }
};
</script>

<style lang="scss" scoped></style>
