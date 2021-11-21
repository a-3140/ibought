<template>
  <div class="btn-container">
    <el-button :type="type" :icon="icon" round>{{ text }}</el-button>
  </div>
</template>

<script lang="ts">
export default {
  name: "EBtn",
  props: {
    icon: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
      default: "default",
    },
  },
};
</script>


<style scoped>
.btn-container {
  position: fixed;
  bottom: 90px;
  right: 20px;
}
</style>