<template>
  <div>
    <headerComponent />
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<script>
import headerComponent from "./headerComponent";
export default {
  data() {
    return {};
  },
  methods: {},
  components: { headerComponent }
};
</script>
<style>
main {
  padding: 30px;
  height: 550px;
}
</style>
