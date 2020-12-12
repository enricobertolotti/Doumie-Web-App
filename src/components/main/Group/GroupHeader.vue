<template>
  <div
    class="d-flex flex-column align-items-start groupHeader w-100"
    :style="headerStyle"
  >
    <h6 class="groupHeaderTitle">{{ title }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String
  },
  computed: {
    headerStyle() {
      return "background-color: " + this.color + ";";
    }
  }
};
</script>

<style lang="scss" scoped>
.groupHeader {
  border-radius: 0.5em;
}

.groupHeaderTitle {
  margin: 0.3em 0.3em 0.3em 0.7em;
  font-size: 1em;
}
</style>
