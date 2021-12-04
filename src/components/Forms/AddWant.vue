<template>
  <div>
    <el-row type="flex" justify="center" class="row-bg">
      <el-col :xs="20">
        <el-form ref="numberValidateForm" :model="form">
          <el-form-item>
            <el-date-picker
              v-model="form.initialDate"
              type="date"
              placeholder="date added"
              :picker-options="datePickerOptions"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.name"
              :maxlength="100"
              :show-word-limit="nameShowWordLimit"
              placeholder="name"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.source"
              :maxlength="2000"
              :show-word-limit="sourceShowWordLimit"
              placeholder="source ( link or shop )"
            />
          </el-form-item>
          <el-form-item>
            <el-select
              allow-create
              filterable
              v-model="form.category"
              placeholder="category"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
              <el-tooltip
                content="edit categories"
                placement="top"
                slot="prefix"
              >
                <i class="el-icon-edit-outline" @click="editCategories()" />
              </el-tooltip>
            </el-select>
          </el-form-item>
          <el-form-item
            prop="price"
            :rules="[
              {
                type: 'number',
                message: 'price must be a number',
              },
            ]"
          >
            <el-input placeholder="price" v-model.number="form.price">
              <span slot="suffix"> {{ currency }} </span>
            </el-input>
          </el-form-item>
          <el-form-item
            prop="days"
            :rules="[{ type: 'number', message: 'days must be a number' }]"
          >
            <el-input
              type="days"
              v-model.number="form.days"
              complete="off"
              placeholder="days"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-input placeholder="note" v-model="form.note">
              <el-tooltip content="upload image" placement="top" slot="suffix">
                <i class="el-icon-picture-outline" @click="uploadImg()" />
              </el-tooltip>
            </el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div class="fixed-button">
      <el-button class="save-btn" round type="info">save</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddWantForm",
  data() {
    return {
      datePickerOptions: {
        disabledDate(date) {
          return date > new Date();
        },
      },
      currency: "php",
      days: 1,
      form: {
        category: [],
        price: "",
        days: "",
        name: "",
        region: "",
        type: "",
        note: "",
        source: "",
        initialDate: new Date(),
      },
      options: [
        {
          value: "gadgets",
          label: "gadgets",
        },
        {
          value: "furniture",
          label: "furniture",
        },
      ],
    };
  },
  computed: {
    nameShowWordLimit() {
      return this.form.name.length > 75 ? true : false;
    },
    sourceShowWordLimit() {
      return this.form.source.length > 255 ? true : false;
    },
  },
  methods: {
    editCategories() {
      alert("feature to be added");
    },
    uploadImg() {
      alert("feature to be added");
    },
  },
};
</script>

<style scoped>
.el-form-item {
  margin-bottom: 1em;
}
.el-input {
  width: 100%;
}
.el-select {
  width: 100%;
}
.save-btn {
  width: calc(100% - 40px);
  height: 50px;
  margin-bottom: 20px;
}
.fixed-button {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>