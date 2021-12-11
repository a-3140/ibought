<template>
  <div class="mobile-top-nav-container">
    <div class="mobile-top-nav" :class="showSideIcons ? 'spaced' : 'center'">
      <i v-if="showSideIcons" class="el-icon-setting" />
      <span>{{ currentTitle }}</span>
      <i v-if="showSideIcons" class="el-icon-user" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavTop",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    showSideIcons: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    currentTitle() {
      return this.title ? this.title : this.$route.name;
    },
  },
};
</script>


<style scoped>
.spaced {
  justify-content: space-between;
}

.center {
  justify-content: center;
}

.mobile-top-nav-container {
  width: 100%;
  padding: 0;
  margin: 0;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: #f1f3f4;
  z-index: 1;
}
.mobile-top-nav {
  display: flex;
  align-items: center;
  height: 60px;
  align-content: center;
  padding-left: 2em;
  padding-right: 2em;
}
.mobile-top-nav i {
  font-size: 1.25em;
  color: #505050;
}
</style>