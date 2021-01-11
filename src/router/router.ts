import { createRouter, createWebHistory } from "vue-router";
import Posts from "../pages/posts/Posts.vue";
import PostID from "../pages/posts/[postID]/PostID.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Posts },
    { path: "/:postID", name: "post", component: PostID },
  ],
});

export default router;
