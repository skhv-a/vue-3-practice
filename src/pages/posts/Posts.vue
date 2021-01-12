<template>
  <PostsHeader :posts="state.response" :onPostsSearch="searchPostHandler" />
  <ErrorBox v-if="state.error" :error="error" />
  <PostsWrapper v-else-if="searchedPosts" :posts="searchedPosts" />
  <Loader v-else />
</template>

<script lang="ts">
import { onMounted, ref, watch, toRefs } from "vue";
import { Post as IPost } from "../../api/models/post";
import useRequest from "../../api/useRequest";
import ErrorBox from "../../components/ErrorBox.vue";
import Loader from "../../components/Loader.vue";
import PostsHeader from "../../components/PostsHeader.vue";
import PostsWrapper from "../../components/PostsWrapper.vue";

export default {
  name: "Posts",
  components: {
    ErrorBox,
    Loader,
    PostsHeader,
    PostsWrapper,
  },
  setup() {
    const { state, call } = useRequest<IPost[]>();
    const searchedPosts = ref<IPost[] | null>(null);

    onMounted(() => {
      call("https://jsonplaceholder.typicode.com/posts");
    });

    watch(state, () => {
      if (state.value.response) {
        searchedPosts.value = state.value.response;
      }
    });

    const searchPostHandler = (val: string) => {
      searchedPosts.value = state.value.response!.filter((post) =>
        post.title.includes(val)
      );
    };

    return {
      state,
      searchedPosts,
      searchPostHandler,
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
