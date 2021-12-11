  <template>
  <div>
    <nav-top :showSideIcons="false" />
    <div class="content">
      <div class="container">
        <el-form ref="form" :model="form" @input.native="updateIsFormValidated">
          <el-form-item
            prop="email"
            :rules="[{ required: true, message: 'pleast input your email' }]"
          >
            <el-input
              v-model="form.email"
              :maxlength="100"
              placeholder="email"
            />
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
      </div>
    </div>
  </div>
</template>

<script>
import NavTop from "../components/NavTop.vue";

export default {
  name: "Login",
  components: { NavTop },
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
.content {
  background: #e4e4e6;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  z-index: -999;
}

.container {
  background: #ffffff;
  height: calc(100vh - (60px + 2em));
  padding: 1em;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.el-button {
  width: 100%;
}
</style>