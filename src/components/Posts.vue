<template>
  <div v-if="state.isLoading">Loading...</div>
  <div v-else-if="state.response" v-for="post in state.response" :key="post.id">
    {{ post.title }}
  </div>
  <div v-else>{{ state.error }}</div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import useRequest from "../api/useRequest";

export default {
  name: "Posts",

  setup() {
    const { state, call } = useRequest();

    onMounted(() => {
      call("https://jsonplaceholder.typicode.com/posts");
    });

    return {
      state,
    };
  },
};
</script>
