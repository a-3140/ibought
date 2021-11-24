<template>
  <div class="btn-container">
    <el-button v-if="text" :type="type" :icon="icon" round>{{
      text
    }}</el-button>
    <el-button v-else :type="type" :icon="icon" circle />
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
      default: null,
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