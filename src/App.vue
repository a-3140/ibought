<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
body {
  background: #f1f3f4;
  padding: 0;
  margin: 0;
}
.el-button--info,
.el-button--info:hover {
  background-color: #000000 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

