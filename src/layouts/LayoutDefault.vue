<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main class="body">
      <main class="LayoutDefault__main">
        <slot />
        <e-btn v-bind="button" />
        <e-card /> 
      </main>
    </el-main>
  </el-container>
</template>

<script>
import Header from "../components/layout-default/Header.vue";
import EBtn from "../components/Buttons/EBtn.vue";
import ECard from "../components/ECard.vue";

export default {
  name: "LayoutDefault",
  components: { Header, EBtn, ECard },
  data() {
    return {
      button: {
        type: "danger",
        icon: "el-icon-circle-plus",
        text: "I want ...",
      },
    };
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