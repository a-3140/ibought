
<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="bottom">
      <el-tab-pane
        :key="el.name"
        :name="el.name"
        :label="el.label"
        v-for="el in tabs"
      >
      <div class="tab-content">
      </div>
        {{ el.label }}
        <!-- Content here -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tabs: [
        {
          name: "wants",
          label: "Wants",
        },
        {
          name: "delaying gratification",
          label: "Delaying Gratification",
        },
        {
          name: "things allowed",
          label: "Things Allowed",
        },
      ],
      activeName: "",
    };
  },
  created() {
    this.activeName = this.tabs[0].name
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.tab-position {
  position: fixed;
  bottom: 10px;
}
</style>