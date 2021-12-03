<template>
  <div>
    <nav-top />
    <slot />
    <nav-bottom />
  </div>
</template>

<script>
import NavBottom from "../components/NavBottom.vue";
import NavTop from "../components/NavTop.vue";

export default {
  name: "LayoutDefault",
  components: { NavBottom, NavTop },
};
</script>

<style scoped>
</style>