<template>
  <div class="btn-container">
    <el-button
      v-on:click="callFunction"
      v-if="text"
      :type="type"
      :icon="icon"
      round
      >{{ text }}</el-button
    >
    <el-button
      v-on:click="callFunction"
      v-else
      :type="type"
      :icon="icon"
      circle
    />
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
  methods: {
    callFunction() {
      this.$emit("btn-function");
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