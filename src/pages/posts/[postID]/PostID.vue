<template>
  <div class="wrapper">
    <GoBack :to="'/'" :text="'Posts'" />
    <ErrorBox v-if="error" :error="error" />
    <div v-else-if="postState.response && userState.response">
      <Post :post="postState.response" />
      <h3>Created by: {{ userState.response.username }}</h3>
    </div>
    <Loader v-else />
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Post from "../../../components/Post.vue";
import useGetPost from "../../../hooks/useGetPost";
import useGetUser from "../../../hooks/useGetUser";
import ErrorBox from "../../../components/ErrorBox.vue";
import Loader from "../../../components/Loader.vue";
import GoBack from "../../../components/GoBack.vue";

export default {
  components: { Post, ErrorBox, Loader, GoBack },
  name: "PostID",
  setup() {
    const route = useRoute();
    const { postState, getPost } = useGetPost();
    const { userState, getUser } = useGetUser();

    const postID = Number(route.params["postID"]);

    let error;

    if (isNaN(postID)) {
      error = {
        message: "Wrong post id",
      };
    }

    onMounted(async () => {
      try {
        await getPost(postID);
        await getUser(postState.value.response!.userId);
      } catch (error) {
        error = {
          message: "Something went wrong :(",
        };
        return;
      }
    });

    return {
      postState,
      userState,
      error: postState.value.error || userState.value.error || error,
    };
  },
};
</script>

<style scoped>
* {
  text-align: left;
}
</style>
