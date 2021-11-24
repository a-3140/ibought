<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main class="body">
      <main class="LayoutDefault__main">
        <slot />
        <e-btn @btn-function="toggleDrawer" v-bind="button" />
      </main>
    </el-main>
    <el-drawer
      :visible.sync="drawer"
      :direction="drawerOptions.direction"
      :destroy-on-close="drawerOptions.destroyOnClose"
      :size="drawerOptions.size"
    >
      <span>Hi, there!</span>
    </el-drawer>
  </el-container>
</template>

<script>
import Header from "../components/layout-default/Header.vue";
import EBtn from "../components/Buttons/EBtn.vue";

export default {
  name: "LayoutDefault",
  components: { Header, EBtn },
  data() {
    return {
      drawer: false,
      drawerOptions: {
        destroyOnClose: true,
        direction: "rtl",
        size: "100%",
      },
      button: {
        type: "danger",
        icon: "el-icon-circle-plus",
      },
    };
  },
  methods: {
    toggleDrawer() {
      console.log("drawer toggle");
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
.body {
  min-height: calc(100vh - 90px);
  margin-top: -30px;
  padding-left: 0px;
  padding-right: 0px;
  margin-bottom: 90px;
}
</style>