<template>
  <div class="header">
    <h1>Posts</h1>
    <PostsSearch v-if="state.response" @onSearch="onSearch" />
  </div>
  <div v-if="state.error">{{ state.error }}</div>
  <div class="posts-wrapper" v-else-if="searchedPosts">
    <router-link
      v-for="post in searchedPosts"
      :key="post.id"
      :to="{ name: 'post', params: { postID: post.id } }"
    >
      <Post :post="post" />
    </router-link>
    <h1 v-if="!searchedPosts.length">No posts</h1>
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { onMounted, ref, watch } from "vue";
import { Post as IPost } from "../../api/models/post";
import useRequest from "../../api/useRequest";
import Post from "../../components/Post.vue";
import PostsSearch from "../../components/PostsSearch.vue";

export default {
  name: "Posts",
  components: { Post, PostsSearch },
  setup() {
    const { state, call } = useRequest<IPost[]>();
    const searchedPosts = ref<IPost[] | null>(null);

    onMounted(() => {
      call("https://jsonplaceholder.typicode.com/posts");
    });

    watch(state.value, () => {
      if (state.value.response) {
        searchedPosts.value = state.value.response;
      }
    });

    const onSearch = (val: string) => {
      searchedPosts.value = state.value.response!.filter((post) =>
        post.title.includes(val)
      );
    };

    return {
      state,
      onSearch,
      searchedPosts,
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
.header {
  margin-bottom: 1rem;
}
</style>
