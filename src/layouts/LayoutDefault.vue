<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main class="body">
      <main class="LayoutDefault__main">
        <slot />
        <e-btn :btnType="this.default" :text="'test'" />
      </main>
    </el-main>
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
      default: "plain",
    };
  },
};
</script>

<style scoped>
.body {
  min-height: calc(100vh - 90px);
}
</style>