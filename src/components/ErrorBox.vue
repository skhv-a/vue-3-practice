<template>
  <div class="wrapper">
    <h1 class="error">{{ error.message }}</h1>
  </div>
</template>

<script>
export default {
  name: "ErrorBox",
  props: ["error"],
};
</script>

<style scoped>
.wrapper {
  text-align: center;
}
.error {
  color: red;
}
</style>
