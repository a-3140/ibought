<template>
  <div>
    <Header />
    <div>
      <slot />
    </div>
    <add-want-form />
  </div>
</template>

<script>
import Header from "../components/layout-default/Header.vue";
import AddWantForm from "../components/Forms/AddWant.vue";

export default {
  name: "LayoutDefault",
  components: { Header, AddWantForm },
  data() {
    return {
      category: "",
      days: 1,
      initialDate: "",
      labelPosition: "left",
      price: "1.00",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
      drawer: false,
      input: "",
      drawerOptions: {
        destroyOnClose: true,
        direction: "rtl",
        size: "100%",
      },
      button: {
        type: "danger",
        icon: "el-icon-circle-plus",
        text: "I want",
      },
      saveButton: {
        type: "danger",
        icon: "el-icon-check",
        text: "Save",
      },
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    toggleDrawer() {
      console.log("drawer toggle");
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
</style>