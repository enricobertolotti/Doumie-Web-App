<template>
  <div class="d-flex flex-column w-100">
    <div class="d-flex w-100 justify-content-center align-items-center">
      <div class="d-flex flex-column align-items-start mr-auto">
        <h2 class="m-0">{{ title }}</h2>
        <h5 v-if="subTitle">{{ subTitle }}</h5>
      </div>
      <div v-if="button.text" @click="$emit(button.emit)">
        <b-button size="sm" :class="button.buttonType">{{
          button.text
        }}</b-button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    button: {
      text: "",
      emit: "",
      buttonType: ""
    }
  }
};
</script>

<style lang="scss" scoped>

hr {
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  border: 0;
  border-top: 2px solid rgba(255, 255, 255, 0.05);
  width: 100%;
}

</style>
