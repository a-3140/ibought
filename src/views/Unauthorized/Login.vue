  <template>
  <el-form ref="form" :model="form" @input.native="updateIsFormValidated">
    <el-form-item
      prop="email"
      :rules="[
        {
          type: 'email',
          required: true,
          message: 'please input a valid email',
          trigger: 'blur',
        },
      ]"
    >
      <el-input v-model="form.email" :maxlength="100" placeholder="email" />
    </el-form-item>
    <el-form-item
      prop="password"
      :rules="[
        {
          required: true,
          message: 'please input your password',
          trigger: 'change',
        },
      ]"
    >
      <el-input
        type="password"
        v-model="form.password"
        :maxlength="100"
        placeholder="password"
      />
    </el-form-item>
    <el-button
      v-on:click="loginUser"
      :disabled="!isFormValid"
      type="info"
      round
    >
      submit
    </el-button>
  </el-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      isFormValid: false,
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser: function () {
      this.login(this.form).then(() => this.$router.push("/wants"));
    },
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
