<template>
  <div>
    <el-row type="flex" justify="center" class="row-bg">
      <el-col :xs="20">
        <el-form ref="form" :model="form" @input.native="updateIsFormValidated">
          <el-form-item>
            <el-date-picker
              v-model="form.initialDate"
              type="date"
              placeholder="date added"
              :picker-options="datePickerOptions"
              :editable="false"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item
            prop="name"
            :rules="[{ required: true, message: 'name is required' }]"
          >
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
              { required: true, message: 'price is required' },
              {
                type: 'number',
                message: 'price must be a number',
              },
            ]"
          >
            <el-input placeholder="price" v-model.number="form.price">
              <template slot="append">{{ currency }}</template>
            </el-input>
          </el-form-item>
          <el-form-item
            :rules="[
              { required: true, message: 'days is required' },
              { type: 'number', message: 'days must be a number' },
            ]"
          >
            <el-select v-model="form.days" placeholder="days">
              <el-option
                v-for="item in dayOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
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
    <div class="fixed-btn">
      <el-button
        class="save-btn"
        round
        type="info"
        @click="onSubmit"
        :disabled="!isFormValid"
      >
        save
      </el-button>
    </div>
  </div>
</template>

<script>
import { CURRENT_USER } from "@/graphql/queries";
export default {
  name: "AddWantForm",
  // enable button when name, price, and day is filled up
  data() {
    return {
      datePickerOptions: {
        disabledDate(date) {
          return date > new Date();
        },
      },
      isFormValid: false,
      form: {
        category: [],
        price: "",
        days: "1 day",
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
  apollo: {
    currency: {
      query: CURRENT_USER,
      update: (data) => data.User?.currency?.name,
    },
  },
  computed: {
    dayOptions() {
      return Array(365)
        .fill(0)
        .map((_, i) => {
          const day = i + 1;
          const suffix = day === 1 ? " day" : " days";
          return { label: day + suffix, value: day };
        });
    },
    nameShowWordLimit() {
      return this.form.name.length > 75 ? true : false;
    },
    sourceShowWordLimit() {
      return this.form.source.length > 255 ? true : false;
    },
  },
  methods: {
    updateIsFormValidated() {
      this.$refs.form.validate((isValid) => {
        this.isFormValid = isValid;
      });
    },
    onSubmit() {
      this.$refs.form.validate((isValid, errors) => {
        console.log(isValid, errors);
      });
    },
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
  width: 100% !important;
}
.el-select {
  width: 100%;
}
.save-btn {
  width: calc(100% - 40px);
  height: 50px;
  margin-bottom: 20px;
}

</style>