<template>
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
            <el-input
              type="number"
              min="0.0"
              precision="2"
              v-model="price"
            ></el-input>
          </el-form-item>
          <el-input
            placeholder="Note"
            type="textarea"
            v-model="formLabelAlign.type"
          ></el-input>
        </el-form>
      </el-col>
    </el-row>
    <div class="fixed-button">
      <el-button class="save-btn" type="info">save</el-button>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "AddWantForm",
  props: {
    drawer: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
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
      input: "",
      drawerOptions: {
        destroyOnClose: true,
        direction: "rtl",
        size: "100%",
      },
      saveButton: {
        type: "info",
        icon: "el-icon-check",
        text: "Save",
      },
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.save-btn {
  width: 100%;
  height: 50px;
}
.fixed-button {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>