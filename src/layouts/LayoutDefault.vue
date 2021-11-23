<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main class="body">
      <main class="LayoutDefault__main">
        <slot />
        <e-btn v-bind="button" />
        <e-card v-for="item in wantList" :key="item.id" v-bind="item" />
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
      wantList: [
        {
          id: 1,
          name: "Macbook Air 13 M1 - 256GB",
          shopName: "Shopee",
          price: 20000,
          dateAdded: new Date(2021, 10, 17), // 2 days ago
          daysToDelay: 7,
        },
        {
          id: 2,
          name: "Logitech MX Master 3",
          shopName: "Lazada",
          price: 5000,
          dateAdded: new Date(2021, 10, 19),
          daysToDelay: 4,
        },
      ],
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