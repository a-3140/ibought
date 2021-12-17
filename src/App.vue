<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
    <drawer-container />
  </div>
</template>

<script>
import Container from "@/components/Drawers/Container.vue";

export default {
  name: "App",
  components: { "drawer-container": Container },
};
</script>

<style lang="scss">
body {
  background: #f1f3f4;
  padding: 0;
  margin: 0;
}
// * TODO
// Modularized overriding of design
.el-button--info,
.el-button--info:hover,
.el-button--info:focus {
  background-color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

