<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main class="body">
      <main class="LayoutDefault__main">
        <slot />
      </main>
    </el-main>
  </el-container>
</template>

<script>
import Header from "../components/layout-default/Header.vue";

export default {
  name: "LayoutDefault",
  components: { Header },
};
</script>

<style scoped>
.body {
  min-height: calc(100vh - 90px);
}

</style>