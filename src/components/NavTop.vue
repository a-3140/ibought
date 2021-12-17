<template>
  <div class="mobile-top-nav-container">
    <div class="mobile-top-nav" :class="showSideIcons ? 'spaced' : 'center'">
      <i
        v-if="showSideIcons"
        class="el-icon-setting"
        v-on:click="navToggleDrawer(appSettings)"
      />
      <span>{{ currentTitle }}</span>
      <i
        v-if="showSideIcons"
        class="el-icon-user"
        v-on:click="navToggleDrawer(profileSettings)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavTop",
  data() {
    // * TODO
    // Use some kind of a constant file for the strings
    return {
      appSettings: {
        title: "settings",
        showDrawer: true,
        component: "AppSettings",
        direction: "ltr",
      },
      profileSettings: {
        title: "profile",
        showDrawer: true,
        component: "ProfileSettings",
        direction: "rtl",
      },
    };
  },
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
  methods: {
    ...mapActions(["toggleDrawer"]),
    navToggleDrawer: function (state) {
      this.toggleDrawer(state);
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