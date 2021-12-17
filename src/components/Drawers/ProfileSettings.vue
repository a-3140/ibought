<template>
  <el-button v-on:click="logoutUser" type="info" round> logout </el-button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProfileSettings",
  methods: {
    ...mapActions(["logout"]),
    logoutUser: function () {
      this.logout().then(() => this.$router.push("/login"));
    },
  },
};
</script>
<style scoped>
.el-button {
  width: 100%;
}
</style>