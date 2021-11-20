<template>
  <el-menu
    class="nav-container"
    :router="routerEnabled"
    :default-active="defaultActiveIndex"
    mode="horizontal"
    @select="handleSelect"
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
  name: "Header",
  data() {
    return {
      routerEnabled: true,
      // Update router.index when changing paths & vice versa
      defaultActiveIndex: "",
      header_paths: [
        {
          path: "/wants",
          name: "Wants",
          index: 1,
        },
        {
          path: "/stalled",
          name: "Stalled",
          index: 2,
        },
        {
          path: "/allowed",
          name: "Allowed",
          index: 3,
        },
      ],
    };
  },
  created() {
    this.defaultActiveIndex = this.header_paths[0].path
  },
  // for testing
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
</style>