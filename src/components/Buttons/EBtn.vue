<template>
  <el-button type="plain" :icon="this.props.icon" round>{{ this.props.text }}test</el-button>
  <!-- <el-button round>test</el-button> -->
</template>

<script>
import { buttonTypes } from "../../constants/button-types";

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
    btnType: {
      type: String,
      required: true,
      validator: (prop) => buttonTypes.includes(prop),
    },
  },
  computed() {
    // buttonType(): String {
    //   return this.btnType === 'default' ? ''
    // } 
  }
};
</script>
