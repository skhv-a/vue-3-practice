<template>
  <router-link :to="to" class="link">
    <h3>{{ text }}</h3>
  </router-link>
</template>

<script>
export default {
  name: "GoBack",
  props: ["to", "text"],
};
</script>
