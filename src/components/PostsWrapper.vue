<template>
  <div class="posts-wrapper">
    <router-link
      v-for="post in posts"
      :key="post.id"
      :to="{ name: 'post', params: { postID: post.id } }"
    >
      <Post :post="post" />
    </router-link>
    <h1 v-if="isPostsListEmpty">No posts</h1>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  components: { Post },
  name: "PostsWrapper",
  props: ["posts"],
  computed: {
    isPostsListEmpty() {
      return !this.posts.length;
    },
  },
};
</script>

<style>
.posts-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
}
</style>
