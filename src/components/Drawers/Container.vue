<template>
  <el-drawer
    :visible.sync="drawer.showDrawer"
    :direction="drawer.direction"
    :destroy-on-close="false"
    size="100%"
  >
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
import store from "@/store";

// * TODO
// Use the same logic for addwant

export default {
  name: "Container",
  components: { ProfileSettings, AppSettings },
  computed: {
    drawer() {
      return store.state.drawer;
    },
  },
};
</script>