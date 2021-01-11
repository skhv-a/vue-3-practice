<template>
  <router-view />
</template>

<script>
import Posts from "./pages/posts/Posts.vue";

export default {
  name: "App",
  components: {
    Posts,
  },
};
</script>
