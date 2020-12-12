<template>
  <div
    class="d-flex flex-column projectHeader align-items-start w-100"
    :style="headerStyle"
  >
    <div class="row w-100 m-0 p-0">
      <div class="align-items-start col-6 p-0">
        <h6 class="text-left m-0">{{ title }}</h6>
      </div>
      <div class="col-3 p-0">
        <h6 class="m-0 tableHeader">Priority</h6>
      </div>
      <div class="col-3 p-0">
        <h6 class="m-0 tableHeader">Due</h6>
      </div>
    </div>
    <hr />
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
.projectHeader {
  margin-top: 0.6em;
  border-radius: 0.5em;
}

h6 {
  font-size: 0.9em;
}

.tableHeader {
  opacity: 20%;
}

hr {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  border: 0;
  border-top: 2px solid rgba(255, 255, 255, 0.05);
  width: 100%;
}
</style>
