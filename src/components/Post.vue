<template>
  <div class="post">
    <div class="title">
      <h3>{{ post.title }}</h3>
    </div>
    <div class="body">
      {{ post.body }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Post",
  props: ["post"],
};
</script>

<style scoped lang="scss">
@import "../scss/variables";

.post {
  $background-color: lightgrey;

  display: flex;
  flex-direction: column;

  .title {
    padding: 0 0.5rem;
    border-radius: $border-radius;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: $background-color;
  }

  .body {
    padding: 0.5rem;
    border: 1px solid $background-color;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}
</style>
