<template>
  <div>
    <nav-top :showSideIcons="false" />
    <div class="content">
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import NavTop from "../components/NavTop.vue";

export default {
  name: "LayoutMinimal",
  components: { NavTop },
};
</script>

<style scoped>
.content {
  background: #e4e4e6;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  z-index: -999;
}

.container {
  background: #ffffff;
  height: calc(100vh - (60px + 2em));
  padding: 1em;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>