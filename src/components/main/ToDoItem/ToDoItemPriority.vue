<template>
  <div class="d-flex align-items-center p-2">
    <b-dropdown
      id="dropdown-1"
      size="sm"
      :text="capitalize(this.currentPriority)"
      v-on:change="updatePriority()"
    >
      <b-dropdown-item-button
        v-for="priority in priorities"
        :key="priority"
        @click.prevent="selectPriority(priority)"
      >
        <a class="dropdown-text" :style="itemStyle(priority)">{{ priority }}</a>
      </b-dropdown-item-button>
    </b-dropdown>
    <!-- <div class="d-flex button align-items-center">
      <p class="m-1" :style="itemStyle">{{ priority }}</p>
      <div class="arrow-down m-1" :style="arrowStyle"></div>
      </div> -->
  </div>
</template>

<script>
import { Priority } from "@/models/ToDoItem";
export default {
  props: {
    todoID: String
  },
  data() {
    return {
      selectedOption: 0
    }
  },
  computed: {
    arrowStyle() {
      return "border-top: 0.3em solid" + this.color + ";";
    },
    priorities() {
      return Object.values(Priority);
    },
    currentPriority() {
      return this.$store.getters.getTodoPropertyByID(this.todoID, "priority");
    }
  },
  methods: {
    selectPriority(priority) {
      // Only select when priorities are different
      if (priority != this.currentPriority) {
        this.$emit("updatePriority", priority);
      }
    },

    color() {
      switch (this.priority) {
        case Priority.low:
          return "#37D942";
        case Priority.medium:
          return "#FF8400";
        case Priority.high:
          return "#a52b2b";
        default:
          return "black";
      }
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    itemStyle(priority) {
      return "color: " + this.color(priority) + ";";
    },
    updatePriority() {
      console.log("Selected Priority", this.selectedPriority)
      
    }
  }
};
</script>

<style lang="scss" scoped>
.arrow-down {
  width: 0;
  height: 0;
  border-left: 0.3em solid transparent;
  border-right: 0.3em solid transparent;
}

.button {
  background-color: rgba($color: #ffffff, $alpha: 0);
  border-radius: 0.3em;
  padding: 0em 0.3em;
}

.button:hover {
  cursor: pointer;
  background-color: rgba($color: #ffffff, $alpha: 0.1);
}

.dropdown-text {
  text-decoration: none;
}

::v-deep .dropdown {
  color: #000 !important;
}
</style>
