<template>
  <el-drawer
    :visible.sync="showDrawer"
    :direction="direction"
    :destroy-on-close="false"
    size="100%"
  >
    <slot>
      <div class="black">
        <component v-bind:is="drawer" />
      </div>
    </slot>
  </el-drawer>
</template> 

<script>
// All drawers should be opened through the app?

import ProfileSettings from "@/components/Drawers/ProfileSettings.vue";
import AppSettings from "@/components/Drawers/AppSettings.vue";
// * TODO
// Use the same logic for all existing drawers

export default {
  name: "Container",
  components: { ProfileSettings, AppSettings },
  data() {
    return {
      drawer: "AppSettings",
      showDrawer: false,
      direction: "ltr",
    };
  },
};
</script>