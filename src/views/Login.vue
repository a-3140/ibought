  <template>
  <el-form ref="form" :model="form" @input.native="updateIsFormValidated">
    <el-form-item
      prop="email"
      :rules="[{ required: true, message: 'please input your email' }]"
    >
      <el-input v-model="form.email" :maxlength="100" placeholder="email" />
    </el-form-item>
    <el-form-item
      prop="password"
      :rules="[{ required: true, message: 'please input your password' }]"
    >
      <el-input
        type="password"
        v-model="form.password"
        :maxlength="100"
        placeholder="password"
      />
    </el-form-item>
    <el-button :disabled="!isFormValid" type="info" round> submit </el-button>
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
      this.login(this.authDetails).then(() => this.$router.push("/wants"));
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
