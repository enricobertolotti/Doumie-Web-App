<template>
  <div class="d-flex todo-row-container w-100">
    <!-- Left Side -->
    <div class="d-flex w-50 align-items-center">
      <!-- Icon -->
      <div
        class="d-flex checkbox align-items-center h-100 m-2"
        v-on:click="toggleCompleted"
      >
        <img
          v-if="completed"
          src="@/assets/elements/checkbox_icon_filled.svg"
          alt="checkbox-filled"
          class="checkbox-icon"
        />
        <img
          v-else
          src="@/assets/elements/checkbox_icon_empty.svg"
          alt="checkbox-empty"
          class="checkbox-icon"
        />
      </div>
      <!-- Text Title -->
      <div class="d-flex flex-column p-0 m-2">
        <h6 class="align-self-start m-0">{{ title }}</h6>
        <p class="align-self-start todoDescription m-0">{{ description }}</p>
      </div>
    </div>
    <!-- Right Side -->
    <div class="d-flex w-50 align-items-center">
      Hello
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Test Title",
      description: "Test Description",
      completed: false
    };
  },
  methods: {
    toggleCompleted() {
      this.completed = !this.completed;
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-row-container {
  height: 2.5em;
}

.checkbox-icon {
  padding: 0;
  margin: 0;
  width: auto;
  height: 1em;
}

.checkbox-icon:hover {
  cursor: pointer;
}

.todoDescription {
  font-size: 0.8em;
}
</style>
