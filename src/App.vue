<template>
  <div id="app">
    <component v-if="isMobile" :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
    <div v-else>
      <h1>currently only available at mobile views</h1>
      <h2>please view this website through your phone</h2>
      <!-- TODO: Improve UI and add a patreon link -->
    </div>
    <drawer-container />
  </div>
</template>

<script>
import Container from "@/components/Drawers/Container.vue";

export default {
  name: "App",
  components: { "drawer-container": Container },
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
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
.fixed-btn {
  position: fixed;
  bottom: 10px;
  width: 100%;
}
</style>

