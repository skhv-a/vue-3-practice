<template>
  <router-link to="/">posts page</router-link>
  <div v-if="error">{{ error.message }}</div>
  <div v-else-if="postState.response && userState.response">
    <Post :post="postState.response" />
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Post from "../../../components/Post.vue";
import useGetPost from "../../../hooks/useGetPost";
import useGetUser from "../../../hooks/useGetUser";

export default {
  components: { Post },
  name: "PostID",
  setup() {
    const route = useRoute();
    const { postState, getPost } = useGetPost();
    const { userState, getUser } = useGetUser();

    const postID = Number(route.params["postID"]);

    onMounted(async () => {
      try {
        await getPost(postID);
        await getUser(postState.value.response!.userId);
        // console.log(postState.value.response, userState.value.response);
      } catch (error) {
        alert("Что-то пошло не так");
        return;
      }
    });

    return {
      postState,
      userState,
      error: postState.value.error || userState.value.error,
    };
  },
};
</script>

<style></style>
