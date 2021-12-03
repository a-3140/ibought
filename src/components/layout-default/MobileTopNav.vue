<template>
  <div class="mobile-top-nav-container">
    <div class="mobile-top-nav">
      <i class="el-icon-s-tools" />
      <span>{{ title }}</span>
      <i class="el-icon-user-solid" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileTopNav",
  data() {
    return {
      title: 'Wants'
    }
  }
};
</script>


<style scoped>
.mobile-top-nav-container {
  width: 100%;
  padding: 0;
  margin: 0;
}
.mobile-top-nav {
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  align-content: center;
  padding-left: 1em;
  padding-right: 1em;
}
.mobile-top-nav i{
  font-size: 25px;
  color: #505050;
}
</style>