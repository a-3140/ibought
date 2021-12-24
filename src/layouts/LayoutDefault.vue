<template>
  <div>
    <nav-top />
    <slot />
    <nav-bottom />
  </div>
</template>

<script>
import NavBottom from "../components/Navigation/NavBottom.vue";
import NavTop from "../components/Navigation/NavTop.vue";

export default {
  name: "LayoutDefault",
  components: { NavBottom, NavTop },
};
</script>

<style scoped>
</style>