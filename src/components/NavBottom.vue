<template>
  <el-menu
    class="nav-container"
    :router="routerEnabled"
    :default-active="defaultActiveIndex"
    mode="horizontal"
  >
    <el-menu-item
      v-for="item in header_paths"
      :key="item.index"
      :index="item.path"
    >
      {{ item.name }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavBottom",
  data() {
    return {
      routerEnabled: true,
      // Update router.index when changing paths & vice versa
      defaultActiveIndex: "",
      header_paths: [
        {
          path: "/wants",
          name: "wants",
          index: 1,
        },
        {
          path: "/allowed",
          name: "allowed",
          index: 2,
        },
      ],
    };
  },
  created() {
    this.defaultActiveIndex = this.header_paths[0].path;
  },
};
</script>


<style scoped>
.el-menu-item {
  border-bottom: none !important;
  background: none !important;
}
.nav-container {
  padding-bottom: 10px;
  border-top: 1px solid #ccc;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #F1F3F4;
  z-index: 1;
}
</style>