<template>
  <div>
    Dashboard
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    test() {
      console.log("test");
    },
    toggle() {
      this.isOpen = !this.isOpen;
    }
  },
  components: {}
};
</script>

<style></style>
