<template>
  <el-drawer
    :visible.sync="drawer.showDrawer"
    :direction="drawer.direction"
    :destroy-on-close="drawer.destroyOnClose"
    size="100%"
  >
    <template slot="title">
      <div class="form-title">
        {{ drawer.title }}
      </div>
    </template>
    <slot>
      <div class="black">
        <component v-bind:is="drawer.component" />
      </div>
    </slot>
  </el-drawer>
</template> 

<script>
import ProfileSettings from "@/components/Drawers/ProfileSettings.vue";
import AppSettings from "@/components/Drawers/AppSettings.vue";
import AddWant from "@/components/Drawers/AddWant.vue";
import store from "@/store";

// * TODO
// Use the same logic for addwant

export default {
  name: "Container",
  components: { ProfileSettings, AppSettings, AddWant },
  computed: {
    drawer() {
      return store.state.drawer;
    },
  },
};
</script>

<style scoped>
.form-title {
  text-align: left;
  font-weight: bold;
  font-size: 1.25em;
  color: #000000;
}
.title {
  font-size: 1.5em;
  font-weight: normal;
  padding-left: 1em;
  margin-bottom: 0;
}
</style>