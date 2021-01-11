import { createRouter, createWebHistory } from "vue-router";
import Posts from "../pages/posts/Posts.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [{ path: "/", component: Posts }],
});

export default router;
