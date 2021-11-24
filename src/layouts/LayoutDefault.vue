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
      <el-divider />
      <el-row type="flex" justify="center" class="row-bg">
        <el-col :xs="20">
          <el-form
            :label-position="labelPosition"
            label-width="100px"
            :model="formLabelAlign"
          >
            <el-form-item label="Date">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="Item Name">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="Category">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="Days">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="Price">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="Link">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-input placeholder="Description" type="textarea" v-model="formLabelAlign.type"></el-input>
          </el-form>
        </el-col>
      </el-row>
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
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
      drawer: false,
      input: "",
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