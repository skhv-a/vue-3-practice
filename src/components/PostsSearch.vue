<template>
  <input placeholder="Search by post title" v-model="inputValue" />
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { debounce } from "../utils/debounce";

export default {
  name: "PostsSearch",
  emits: ["search"],
  setup(props, { emit }) {
    const inputValue = ref("");

    const debouncedEmitWrapper = debounce((val: string) => {
      emit("search", val.trim());
    }, 100);

    watch(inputValue, (val) => {
      debouncedEmitWrapper(val);
    });

    return {
      inputValue,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

input {
  width: 250px;
  padding: 0.5rem;
  border-radius: $border-radius;
  outline: none;
}
</style>
