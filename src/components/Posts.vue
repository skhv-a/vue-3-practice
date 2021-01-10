<template>
  <div v-if="state.isLoading">Loading...</div>
  <div v-else-if="state.response" class="posts-wrapper">
    <Post v-for="post in state.response" :key="post.id" :post="post" />
  </div>
  <div v-else>{{ state.error }}</div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { Post as IPost } from "../api/models/post";
import useRequest from "../api/useRequest";
import Post from "./Post.vue";

export default {
  name: "Posts",
  components: { Post },
  setup() {
    const { state, call } = useRequest<IPost[]>();

    onMounted(() => {
      call("https://jsonplaceholder.typicode.com/posts");
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.posts-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
}
</style>
