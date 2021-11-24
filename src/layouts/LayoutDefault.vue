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
              <el-date-picker
                v-model="initialDate"
                type="date"
                placeholder="Pick a day"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="Item Name">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="Category">
              <el-select v-model="category" placeholder="Select a category">
                <el-option label="Gadget" value="gadget"></el-option>
                <el-option label="Furniture" value="furniture"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Days of wait">
              <el-input-number
                v-model="days"
                @change="handleChange"
                :min="1"
                :max="10"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="Price">
              <el-input type="number" v-model="price"></el-input>
            </el-form-item>
            <el-input
              placeholder="Note"
              type="textarea"
              v-model="formLabelAlign.type"
            ></el-input>
          </el-form>
        </el-col>
      </el-row>
      <e-btn v-bind="saveButton" />
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
      category: "",
      days: 1,
      initialDate: "",
      labelPosition: "left",
      price: "1.00",
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
        text: "I want",
      },
      saveButton: {
        type: "danger",
        icon: "el-icon-check",
        text: "Save",
      },

    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
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