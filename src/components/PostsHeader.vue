<template>
  <div class="header">
    <h1>Posts</h1>
    <PostsSearch v-if="posts" @search="onPostsSearch" />
  </div>
</template>

<script>
import PostsSearch from "./PostsSearch.vue";

export default {
  components: { PostsSearch },
  name: "PostsHeader",
  props: ["posts", "onPostsSearch"],
};
</script>

<style>
.header {
  margin-bottom: 1rem;
}
</style>
