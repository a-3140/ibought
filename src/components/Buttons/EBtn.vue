<template>
  <el-button :type="type" :icon="icon" round>{{ text }}</el-button>
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
      default: 'default'
    },
  },
};
</script>
