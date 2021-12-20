<template>
    <div class="fixed-btn">
  <el-button class="logout-btn" v-on:click="logoutUser" type="info" round> logout </el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProfileSettings",
  methods: {
    ...mapActions(["logout", "closeDrawer"]),
    logoutUser: function () {
      this.logout().then(() => this.closeDrawer()).then(() => this.$router.push("/login"));
    },
  },
};
</script>
<style scoped>
.el-button {
  width: 100%;
}
.logout-btn {
  width: calc(100% - 40px);
  height: 50px;
  margin-bottom: 20px;
}
</style>