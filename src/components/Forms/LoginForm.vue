<template>
  <el-form ref="form" :model="form" @input.native="updateIsFormValidated">
    <el-form-item
      prop="email"
      :rules="[{ required: true, message: 'pleast input your email' }]"
    >
      <el-input v-model="form.email" :maxlength="100" placeholder="email" />
    </el-form-item>
    <el-form-item
      prop="password"
      :rules="[{ required: true, message: 'pleast input your password' }]"
    >
      <el-input
        type="password"
        v-model="form.password"
        :maxlength="100"
        placeholder="password"
      />
    </el-form-item>
    <el-button type="info" round> submit </el-button>
  </el-form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    updateIsFormValidated() {
      this.$refs.form.validate((isValid) => {
        this.isFormValid = isValid;
      });
    },
  },
};
</script>
<style scoped>
.el-button {
  width: 100%;
}
</style>