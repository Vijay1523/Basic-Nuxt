<template>
  <div>
    <h1>It's too funny..</h1>
    <NuxtLink to="/">Back page</NuxtLink>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 10000);
    });
  }
};
</script>
